const AnimalBlog = require("../Models/AnimalBlog");

//add a animal Blog
const addAnimalBlog = async (req, res, next) => {
  const { Title, Description, Thumbnail } = req.body;

  const newAnimalBlog = new AnimalBlog({
    Title,
    Description,
    Thumbnail,
  });

  newAnimalBlog
    .save()
    .then(() => {
      res.json("Animal Blog Added");
    })
    .catch((err) => {
      console.log(err);
    });
};

//read all animal Blogs
const getAllAnimalBlogs = async (req, res, next) => {
  AnimalBlog.find()
    .then((animalblogs) => {
      res.json(animalblogs);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addAnimalBlog = addAnimalBlog;
exports.getAllAnimalBlogs = getAllAnimalBlogs;
