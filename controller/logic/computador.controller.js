/** Dto */
const computadorDto = require("../../model/dto/computador.dto");
const marcaDto = require("../../model/dto/marca.dto");
const config = require("config");

exports.createComputador = (req, res, next) => {
    let com = {
        marca_id : req.body.marca_id,
        code : req.body.code,
        procesador: req.body.procesador,
        memoriaRam: req.body.memoriaRam,
        discoDura: req.body.discoDura,
        bateria: req.body.bateria,
        sistemaOperativo: req.body.sistemaOperativo,
        entradasUSB: req.body.entradasUSB,
        tarjetaGrafica: req.body.tarjetaGrafica
    };
    //invoca al metodo creado en el dto de computador.
    computadorDto.create(com, (err, data) => {
        if(err){
            return res.status(400).json (
                {
                    error: err
                }
            );
        }
        //buscar entre las marcas registradas para saber si existe, si esta se la asigna al computador
        // se le envia el nombre
        marcaDto.getByName({marca_id: req.body.marca_id},(err, data) => {
            if(err){
                computadorDto.delete({_id: data._id}, (e, data) => {
                    return res.status(400).json(
                        {
                            error: e
                        }
                    )
                })   
            }
        })
        res.status(201).json(
            {
                info: data
            }
        )
        computadorDto.update({_id: req.body.id}, com, (err, data) => {
            if(err){
                return res.status(400).json (
                    {
                        error: err
                    }
                );
            }
            res.status(201).json(
                {
                    info: data
                }
            );
        });
    });
};

/** actualizar */
exports.updateComputador = (req, res, next) => {
    let com = {
        code : req.body.code,
        procesador: req.body.procesador,
        memoriaRam: req.body.memoriaRam,
        discoDura: req.body.discoDura,
        bateria: req.body.bateria,
        sistemaOperativo: req.body.sistemaOperativo,
        entradasUSB: req.body.entradasUSB,
        tarjetaGrafica: req.body.tarjetaGrafica
    };
    computadorDto.update({_id: req.body.id}, com, (err, data) => {
        if(err){
            return res.status(400).json (
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

/** mostrar todo */
exports.getAll = (req, res, next) => {
    computadorDto.getAll({}, (err, data) => {
        if(err){
            return res.status(400).json (
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

/** buscar por codigo */
exports.getByCode = (req, res, next) => {
    computadorDto.getByCode({code: req.params.code}, (err, data) => {
        if(err){
            return res.status(400).json (
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

/** eliminar */
exports.deleteComputador = () => {
    computadorDto.delete({_id: req.body.id}, (err, data) => {
        if(err){
            return res.status(400).json (
                {
                    error: err
                }
            );
        }
        res.status(204).json();
    });
}