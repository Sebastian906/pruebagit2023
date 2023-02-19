/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Schema creation */
const computadorSchema = new mongoose.Schema({
    marca_id:{
        type: "String",
        unique: true
    },
    code:{
        type: "String",
        required: true,
    },
    procesador:{
        type: "String",
        required: true
    },
    memoriaRam:{
        type: "String",
        required: true
    },
    discoDura:{
        type: "String",
        required: true
    },
    bateria:{
        type: "String",
        required: true
    },
    sistemaOperativo:{
        type: "String",
        required: true
    },
    entradasUSB:{
        type: "Number",
        required: true
    },
    tarjetaGrafica:{
        type: "String",
        required: true
    }
});

/** schema exportation */
computadorSchema.plugin(validator);
module.exports = computadorSchema;