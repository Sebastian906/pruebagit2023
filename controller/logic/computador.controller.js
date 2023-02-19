/** Dto */
const computadorDto = require("../../model/dto/computador.dto");
const marcaDto = require("../../model/dto/marca.dto");
const config = require("config");

/** Helper */
const helper = require("../helpers/general.helper");

exports.createComputador = (req, res, next) => {
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
    computadorDto.save(com, (err, data) => {
        if(err){
            return res.status(400).json (
                {
                    error: err
                }
            );
        }
        computadorDto.update({_id: req.body.ib}, com, (err, data) => {
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
        computadorDto.update({_id: req.body.ib}, com, (err, data) => {
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