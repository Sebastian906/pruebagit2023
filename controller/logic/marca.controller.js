/** Dto */
const marcaDto = require("../../model/dto/marca.dto");
const computadorDto = require("../../model/dto/computador.dto");
const config = require("config");

/** Helper */
const helper = require("../helpers/general.helper");

exports.createMarca = (req, res, next) => {
    let mrc = {
        code : req.body.code,
        nombre: req.body.nombre,
        logo: req.body.logo,
        servicio: req.body.servicio,
        lema: req.body.lema
    };
    marcaDto.save(mrc, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        marcaDto.update({_id: req.body.id}, mrc, (err, data) => {
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

exports.updateMarca = (req, res, next) => {
    let mrc = {
        code : req.body.code,
        nombre: req.body.nombre,
        logo: req.body.logo,
        servicio: req.body.servicio,
        lema: req.body.lema
    };
    marcaDto.update({_id: req.body.id}, mrc, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        marcaDto.update({_id: req.body.id}, mrc, (err, data) => {
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
    marcaDto.getAll({}, (err, data) => {
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
    marcaDto.getByCode({code: req.params.code}, (err, data) => {
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

exports.deleteMarca = () => {
    marcaDto.delete({_id: req.body.id}, (err, data) => {
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