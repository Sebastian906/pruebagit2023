/** Dto */
const marcaDto = require("../../model/dto/marca.dto");
const config = require("config");

exports.createMarca = (req, res, next) => {
    let mrc = {
        rut : req.body.rut,
        nombre: req.body.nombre,
        logo: req.body.logo,
        servicio: req.body.servicio,
        lema: req.body.lema
    };
    marcaDto.create(mrc, (err, data) => {
        if(err){
            return res.status(400).json(
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

/** actualizar */
exports.updateMarca = (req, res, next) => {
    let mrc = {
        rut : req.body.rut,
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
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

/** mostrar todo */
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

exports.getByName = (req, res, next) => {
    marcaDto.getByName({nombre: req.params.nombre}, (err, data) => {
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