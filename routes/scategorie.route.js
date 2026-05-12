const express = require('express');
const router = express.Router();
const SCategorie = require('../models/scategorie');

router.get('/', async (req, res) => {
    const scats = await SCategorie.find().populate("categorieID");
    res.json(scats);
});

router.post('/', async (req, res) => {
    const scat = new SCategorie(req.body);
    await scat.save();
    res.json(scat);
});

router.get('/:id', async (req, res) => {
    const scat = await SCategorie.findById(req.params.id);
    res.json(scat);
});

router.put('/:id', async (req, res) => {
    const scat = await SCategorie.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.json(scat);
});

router.delete('/:id', async (req, res) => {
    await SCategorie.findByIdAndDelete(req.params.id);
    res.json({message:"deleted"});
});

module.exports = router;
