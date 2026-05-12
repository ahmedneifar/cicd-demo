const express = require('express');
const router = express.Router();
const Article = require('../models/article');

router.get('/', async (req, res) => {
    const arts = await Article.find().populate("scategorieID");
    res.json(arts);
});

router.post('/', async (req, res) => {
    const art = new Article(req.body);
    await art.save();
    res.json(art);
});

router.get('/:id', async (req, res) => {
    const art = await Article.findById(req.params.id);
    res.json(art);
});

router.put('/:id', async (req, res) => {
    const art = await Article.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(art);
});

router.delete('/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.json({message:"deleted"});
});

module.exports = router;
