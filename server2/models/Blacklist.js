const { model, Schema} = require('mongoose');

const blacklistSchema = new Schema ({
    Word: String

});

module.exports = model("Blacklist", blacklistSchema);