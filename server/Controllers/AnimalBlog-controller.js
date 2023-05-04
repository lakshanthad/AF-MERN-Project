const AnimalBlog = require("../Models/AnimalBlog");
const firebase = require("firebase");
const { Storage } = require("@google-cloud/storage");
const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");

//add a animal Blog
// const addAnimalBlog = async (req, res, next) => {
//   const { Title, Description, Thumbnail } = req.body;

//   const newAnimalBlog = new AnimalBlog({
//     Title,
//     Description,
//     Thumbnail: {
//       public_id: result.public_id,
//       url: result.secure_url,
//     },
//   });

//   newAnimalBlog
//     .save()
//     .then(() => {
//       res.json("Animal Blog Added");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

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

//update animal Blog
const updateAnimalBlog = async (req, res, next) => {
  let animalBlogId = req.params.id;

  const { Title, Description, Thumbnail } = req.body;

  const updateAnimalBlog = {
    Title,
    Description,
    Thumbnail,
  };

  //check if animal blog is available
  const update = await AnimalBlog.findByIdAndUpdate(
    animalBlogId,
    updateAnimalBlog
  )
    .then(() => {
      res.status(200).send({ status: "Animal Blog Updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error in updating animal blog", error: err.message });
    });
};

//delete an animal blog
const deleteAnimalBlog = async (req, res, next) => {
  let animalBlogId = req.params.id;

  await AnimalBlog.findByIdAndDelete(animalBlogId)
    .then(() => {
      res.status(200).send({ status: "Animal Blog Deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error in deleting Animal Blog", error: err.message });
    });
};

exports.addAnimalBlog = addAnimalBlog;
exports.getAllAnimalBlogs = getAllAnimalBlogs;
exports.updateAnimalBlog = updateAnimalBlog;
exports.deleteAnimalBlog = deleteAnimalBlog;
