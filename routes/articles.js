const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

// @route   GET api/articles
// @desc    Get all users articles
// @access  Public
router.get('/', async (req, res) => {
    try {
        const articles = await Article.find().sort({created_at: -1});
        res.json(articles)
    } catch (err) {
        res.status(500).send('Server Error')
    }
});

module.exports = router;