/** packages */
const mongoose = require("mongoose");

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
module.exports = marcaSchema;