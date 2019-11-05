const mongoose = require("mongoose");

const ArticleSchema = mongoose.Schema({
    created_at: Date,
    title: String,
    url: String,
    author: String,
    points: Number,
    story_text: String,
    comment_text: String,
    num_comments: Number,
    story_id: Number,
    story_title: String,
    story_url: String,
    parent_id: Number,
    created_at_i: Number,
    objectID: String,
});

module.exports = mongoose.model("Article", ArticleSchema);