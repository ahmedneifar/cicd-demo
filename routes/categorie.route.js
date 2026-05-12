const express = require('express');
const router = express.Router();
const Categorie = require('../models/categorie');

router.get('/', async (req, res) => {
    const cats = await Categorie.find({}, null, {sort: {'_id': -1}});
    res.json(cats);
});

router.post('/', async (req, res) => {
    const cat = new Categorie(req.body);
    await cat.save();
    res.json(cat);
});

router.get('/:id', async (req, res) => {
    const cat = await Categorie.findById(req.params.id);
    res.json(cat);
});

router.put('/:id', async (req, res) => {
    const cat = await Categorie.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(cat);
});

router.delete('/:id', async (req, res) => {
    await Categorie.findByIdAndDelete(req.params.id);
    res.json({message:"deleted"});
});

module.exports = router;
