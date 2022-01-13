const { model, Schema} = require('mongoose');

const whitelistSchema = new Schema ({
    type: String,
    worldList: [String]
});

module.exports = model("WhitelistModel", whitelistSchema);