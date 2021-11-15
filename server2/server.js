const express = require("express");
const Twitter = require("twit");
const cors = require("cors");


const app = express();

app.use(cors());
const apiClient = new Twitter({ 
    consumer_key: 'rqcJL0ITFuePpkl7ta6Hejizw', 
    consumer_secret: 'zQcWwOs4dqaIv0VkP0z29aroAOkt25SVILKga3socRujjlTHpi',
    access_token: '1366707479997009920-UCLPInRFUncTVlGZtnOs3tjZTxkMnB', 
    access_token_secret: 'gceONV7iSMDuBdHwbZJ5OrjLNKAoALIhKlUY6jiy045Ni' 
});

app.get('/home_timeline_nort/:user', (req,res)=>{
    const params = {screen_name: req.params.user, count: 200,  tweet_mode: 'extended', include_rts:false };
    apiClient.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) res.json(tweets);
        else res.json({error: error});
        
    });
})

app.get('/home_timeline_with_replies/:user', (req,res)=>{
    const params = {screen_name: req.params.user, count: 200,  tweet_mode: 'extended', exclude_replies: false };
    apiClient.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) res.json(tweets);
        else res.json({error: error});
        
    });
})

app.get('/home_timeline_with_replies_nort/:user', (req,res)=>{
    const params = {screen_name: req.params.user, count: 200,  tweet_mode: 'extended', exclude_replies: false, include_rts:false };
    apiClient.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) res.json(tweets);
        else res.json({error: error});
        
    });
})

app.get('/home_timeline/:user', (req,res)=>{
    const params = {screen_name: req.params.user, count: 200,  tweet_mode: 'extended', include_rts: true };
    apiClient.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) res.json(tweets);
        else res.json({error: error});
        
    });
})

app.get('/search/:user', (req,res)=>{
    const params = {screen_name: req.params.user};
    apiClient.get('users/lookup', params, function (error, tweets, response) {
        if (!error) res.json(tweets);
        else res.json({error: error});
        
    });
})


app.listen(3000, ()=> console.log("running server"))