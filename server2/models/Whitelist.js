const { model, Schema} = require('mongoose');


const whitelistSchema = new Schema ({
    type: String,
    wordList: []
});

module.exports = model("WhitelistModel", whitelistSchema);