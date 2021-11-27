const { model, Schema} = require('mongoose');

const blacklistSchema = new Schema ({
    blacklist: { type: [String] }

});

module.exports = model("Blacklist", blacklistSchema);