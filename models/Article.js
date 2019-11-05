const mongoose = require("mongoose");

const ArticleSchema = mongoose.Schema({
    title: {type: String},
    story_title: {type: String},
    created_at: {type: Date}
});

module.exports = mongoose.model("Article", ArticleSchema);