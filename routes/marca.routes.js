const controller = require("../controller/logic/marca.controller");

module.exports = (app) => {
    console.log("Loading routes of computer");
    app.get("/marca",(req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/marca/bycode/:code",(req, res, next) => {
        console.log("getting marca by code");
        controller.getByCode(req, res, next);
    });

    app.post("/marca",(req, res, next) => {
        controller.createMarca(req, res, next);
    });

    app.put("/marca",(req, res, next) => {
        controller.updateMarca(req, res, next);
    });

    app.delete("/marca",(req, res, next) => {
        
        controller.deleteMarca(req, res, next);
    });
};