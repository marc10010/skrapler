
const express = require("express");
const dotenv = require("dotenv");
const needle = require("needle");
const cors = require("cors");


const app = express()

app.use(cors({
    origin: '*'
}));


dotenv.config();

//Get Bearer Token from .env 
const BearerToken = process.env.BEARER_TOKEN;

const endpointUrl = "https://api.twitter.com/1.1/statuses/user_timeline.json";

//Get Tweets from Twitter API
const getTweets = async(id) => {

    const params = {
        'query': 'from:'+id+' -is:retweet',
        'tweet.fields': 'created_at',
        'expansions': 'author_id'
    }
    const response = await needle ('get', endpointUrl, params,{
        headers: {
            "User-Agent": "v2RecentSearchJS",
            "authorization": `Bearer ${BearerToken}`
        }
    })

    if (response.statusCode !== 200) {
        if (response.statusCode === 403) {
            res.status(403).send(response.body);
        } 
        else {
            throw new Error(response.body.error.message);
        }
    }
    if (response.body)
        return response.body;
    else
        throw new Error("Unsuccessful Request");   
}

//This returns the object to client
const getTweetAnalysis = async(req, res) => {
    try {
        let twitterData =await getTweets(req.params.id);
        //res.send(twitterData);
        res.send(await analyze(twitterData));
    } catch (error) {
        res.send(error);
    }
}

const getTweetsUser = async(req, res)=>{
    try {
        let twitterData =await getTweets(req.params.id);
        //res.send(twitterData);
        res.send(twitterData.data);
    } catch (error) {
        res.send(error);
    }
}

//Simple Analysis
const twitterObject = {}
const analyze = async(twitterData) =>
{
    twitterObject["username"] = twitterData.includes.users[0].username;
    twitterObject["name"] = twitterData.includes.users[0].name;
    let averageCharacter = 0;
    let averageWord = 0;
    let totalCharacter = 0;
    let totalWord = 0;
    let texts = twitterData.data;
    if(texts)
    {
        for(let index =0 ; index < twitterData.data.length ; index++)
        {
            totalCharacter += texts[index].text.length;
            totalWord += texts[index].text.split(" ").length;
        }
    }
    if(twitterData.meta.result_count > 0)
    {
        twitterObject["usesActively"] =  true;
        averageCharacter = totalCharacter/twitterData.meta.result_count;
        averageWord = totalWord/twitterData.meta.result_count;
    }
    else
    {
        twitterObject["usesActively"] =  false;
    }
    twitterObject["averageWordCount"] = averageWord;
    twitterObject["averageCharacterCount"] = averageCharacter;
    return twitterObject;
}

//API route 
app.get("/api/tweet_header/:id",getTweetAnalysis);
app.get("/api/tweet/:id",cors(), getTweetsUser);

//You can specify the port in .env file
app.listen(3000,()=>
{
    console.log('Currently Listening to the Server')
})

module.exports = app