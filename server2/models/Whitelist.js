const { model, Schema} = require('mongoose');

const whitelistSchema = new Schema ({
    Word: String

});

module.exports = model("WhitelistModel", whitelistSchema);