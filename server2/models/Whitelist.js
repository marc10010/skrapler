const { model, Schema} = require('mongoose');

const whitelistSchema = new Schema ({
    type: String,
    wordList: [String]
});

module.exports = model("WhitelistModel", whitelistSchema);