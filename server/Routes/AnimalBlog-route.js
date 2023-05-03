const animalBlogRouter = require("express").Router();
const animalBlogController = require("../Controllers/AnimalBlog-controller");

animalBlogRouter.post("/add", animalBlogController.addAnimalBlog);
animalBlogRouter.get("/allblogs", animalBlogController.getAllAnimalBlogs);
animalBlogRouter.put("/update/:id", animalBlogController.updateAnimalBlog);
animalBlogRouter.delete("/delete/:id", animalBlogController.deleteAnimalBlog);

module.exports = animalBlogRouter;
