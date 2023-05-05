const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const sharp = require("sharp");
const Image = require("../Models/AgriBlog");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../client/public/Assets/agriBlogs");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage });

// Upload file to server
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { title } = req.body;
    const { articlebody } = req.body;
    const { filename: imageName } = req.file;
    const imagePath = `/Assets/agriBlogs/${imageName}`;
    
    // Save file path to MongoDB
    const image = await Image.create({
      title,
      articlebody,
      image: imagePath,
    });
    res.json(image);
  } catch (error) {
    console.error(error);
    
    // Delete uploaded file if there is an error
    fs.unlinkSync(req.file.path);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all images
router.get("/images", async (req, res) => {
  try {
    const images = await Image.find({}, { title: 1, articlebody: 1, image: 1 });
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a record
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Find the record in the database and delete it
    const image = await Image.findByIdAndDelete(id);

    // Delete the image file from the server
    const imagePath = `../client/public${image.image}`;
    fs.unlinkSync(imagePath);

    res.json({ message: "Record deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

