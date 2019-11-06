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

// @route   PUT api/articles/:id
// @desc    Update article
// @access  Public
router.put('/:id', async (req, res) => {
    try {
        let article = await Article.findById(req.params.id);
        if (!article) return res.status(404).json({msg: 'Article not found.'});

        article.removed = true;
        article.save();

        res.json(article);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/articles/:id
// @desc    Delete article
// @access  Public
router.delete('/:id', async (req, res) => {
    try {
        let article = await Article.findById(req.params.id);
        if (!article) return res.status(404).json({msg: 'Article not found.'});

        await Article.findByIdAndRemove(req.params.id);
        res.json({msg: 'Article removed.'});
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;