const controller = require("../controller/logic/computador.controller");

module.exports = (app) => {
    console.log("Loading routes of computer");
    app.get("/computador",(req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/computador/bycode/:code",(req, res, next) => {
        console.log("getting computador by code");
        controller.getByCode(req, res, next);
    });

    app.post("/computador",(req, res, next) => {
        controller.createComputador(req, res, next);
    });

    app.put("/computador",(req, res, next) => {
        controller.updateComputador(req, res, next);
    });

    app.delete("/computador",(req, res, next) => {
        controller.deleteComputador(req, res, next);
    });
};