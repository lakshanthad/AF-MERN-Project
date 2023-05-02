const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8070;

app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, () => {
  useCreateIndex: true;
  useNewUrlParser: true;
  useUnifiedTopology: true;
  useFindAndModify: true;
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection establishment is successful!!!");
});

//AnimalBlog Routes
const animalBlog_router = require("./Routes/AnimalBlog-route");
app.use("/animalblog", animalBlog_router);

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
