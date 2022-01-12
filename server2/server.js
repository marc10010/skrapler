const express = require("express");
const Twitter = require("twit");
const cors = require("cors");
const {MONGODB} = require("./config.js");
const mongoose = require('mongoose');
const BlacklistModel = require("./models/Blacklist");
const WhitelistModel = require("./models/Whitelist");

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

app.get('/blacklist', function(req, res) {

    var wordMap = [];
    BlacklistModel.find({}, function(err, words ) {
        if(words){
            let i= 0;
            words.forEach(function( word) {
                wordMap.push({id: i, Word: word.Word});
                i++;
            });  
            res.json(wordMap);    
        }
        else res.json({error: err })
    })
})

app.get('/blacklist/delete/:word', function(req, res) {
    
    BlacklistModel.findOneAndDelete({ Word: req.params.word })
    .then(res.status(200).json({ message: "Blacklisted word deleted successfully" }))
   .catch((err) => next(err));
});

app.get('/blacklist/add/:word', function(req, res) {
    
    const newBlacklistedWord = new BlacklistModel({
      Word: req.params.word  
    });
    newBlacklistedWord.save()
    .then(res.status(200).json({ message: "Blacklisted word added successfully" }))
    .catch((err) => next(err));
   
});

app.get('/whitelist', function(req, res) {

    var wordMap = [];
    WhitelistModel.find({}, function(err, words ) {
        if(words){
            let i= 0;
            words.forEach(function( word) {
                wordMap.push({id: i, Word: word.Word});
                i++;
            });  
            res.json(wordMap);    
        }
        else res.json({error: err })
    })
})

app.get('/whitelist/delete/:word', function(req, res) {
    
    WhitelistModel.findOneAndDelete({ Word: req.params.word })
    .then(res.status(200).json({ message: "Whitelisted word deleted successfully" }))
   .catch((err) => next(err));
});

app.get('/whitelist/add/:word', function(req, res) {
    
    const newwhitelistedWord = new WhitelistModel({
      Word: req.params.word  
    });
    newwhitelistedWord.save()
    .then(res.status(200).json({ message: "Whitelisted word added successfully" }))
    .catch((err) => next(err));
   
});

mongoose 
  .connect(MONGODB)
  .then(() => {
    console.log('MongoDB & Twitter API Connected');
    return app.listen({ port: 3000 }, "0.0.0.0");
  })
  /*
  .then((res) => {
      console.log(`Server running at ${res.url}`);
  })
  */
//app.listen(3000, ()=> console.log("running server"))



//To define CRUD endpoints. The idea is to let the client (frontend) create, read, update and delete blacklisted words. To do so different
//endpoints are required. 