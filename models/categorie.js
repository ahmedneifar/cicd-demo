const mongoose = require("mongoose");

const categorieSchema = mongoose.Schema({
    nomcategorie: { type: String, required: true, unique: true },
    imagecategorie: { type: String }
});

module.exports = mongoose.model('categorie', categorieSchema);
