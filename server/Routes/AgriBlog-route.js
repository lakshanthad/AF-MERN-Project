const agriBlogRouter = require("express").Router();
const agriBlogController = require("../Controllers/AgriBlog-controller");

agriBlogRouter.post("/addAgri", agriBlogController.addAgriBlog);
agriBlogRouter.get("/getAgri", agriBlogController.getAllAgriBlogs);
agriBlogRouter.get("/getOneAgri/:id", agriBlogController.getAgriById);
agriBlogRouter.put("/updateAgri/:id", agriBlogController.updateAgriBlog);
agriBlogRouter.delete("deleteAgri/:id", agriBlogController.deleteAgriBlog);

module.exports = agriBlogRouter;
