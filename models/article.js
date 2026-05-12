const mongoose = require("mongoose");
const Scategorie = require("./scategorie");

const articleSchema = mongoose.Schema({
    reference: { type: String, required: true, unique: true },
    designation: { type: String, required: true, unique: true },
    prix: Number,
    marque: String,
    qtestock: Number,
    imageart: String,
    scategorieID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Scategorie
    }
});

module.exports = mongoose.model('article', articleSchema);
