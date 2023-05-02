const animalBlogRouter = require("express").Router();
const animalBlogController = require("../Controllers/AnimalBlog-controller");

animalBlogRouter.post("/addAnimalBlog", animalBlogController.addAnimalBlog);
animalBlogRouter.get("/allAnimalBlog", animalBlogController.getAllAnimalBlogs);
