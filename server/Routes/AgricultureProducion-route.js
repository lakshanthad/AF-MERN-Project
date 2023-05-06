const agricultureProductionRouter = require("express").Router();
const agricultureProductionController = require("../Controllers/AgricultureProduction-controller");

agricultureProductionRouter.post("/addAgricultureProduction", agricultureProductionController.addAgricultureProduction);
agricultureProductionRouter.get("/getAgricultureProduction", agricultureProductionController.getAllAgricultureProduction);
agricultureProductionRouter.get("/getOneAgricultureProduction/:id", agricultureProductionController.getAgricultureProductionByID);
agricultureProductionRouter.put("/updateAgricultureProduction/:id", agricultureProductionController.updateAgricultureProduction);
agricultureProductionRouter.delete("/deleteAgricultureProduction/:id", agricultureProductionController.deleteAgricultureProduction);

module.exports = agricultureProductionRouter;