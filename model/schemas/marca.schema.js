/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Schema creation */
const marcaSchema = new mongoose.Schema({
    nombre:{
        type: "String",
        required: true
    },
    logo:{
        type: "String",
        required: true
    },
    servicio:{
        type: "String",
        required: true
    },
    lema:{
        type: "String",
        required: true
    }
});

/** schema exportation */
marcaSchema.plugin(validator);
module.exports = marcaSchema;