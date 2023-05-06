const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8070;
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
//connect database
const URL = process.env.MONGODB_URL;
app.use(express.static("../client/src/Assets/images"));
app.use(express.static("../client/src/Assets/animalblogs"));

// mongoose.connect(URL, () => {
//   useNewUrlParser: true;
//   useCreateIndex: true;
//   useUnifiedTopology: true;
//   useFindAndModify: false;
// });
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB connection success !!");
// });

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});
db.once("connected", () => {
  console.log("Connected to MongoDB!");
});

//LoginGrassroot login routes
const grass = require("./Routes/Grass-route");
app.use("/grass", grass);

//LoginAdmin login routes
const staff = require("./Routes/Staff-route");
app.use("/staff", staff);

//AgriBlog Routes
const agriBlogRouter = require("./Routes/AgriBlog-route");
app.use("/agriBlog", agriBlogRouter);

//Beef production Routes.
const beefProductionRouter = require("./Routes/Animal-routes/BeefProduction-route");
app.use("/beefProduction", beefProductionRouter);

//Milk production routes.
const milkProductionRouter = require("./Routes/Animal-routes/MilkProduction-route");
app.use("/milkProduction", milkProductionRouter);

//Egg production routes.
const eggProductionRouter = require("./Routes/Animal-routes/EggProduction-route");
app.use("/eggProduction", eggProductionRouter);

//Pork production routes.
const porkProductionRouter = require("./Routes/Animal-routes/PorkProduction-route");
app.use("/porkProduction", porkProductionRouter);

//Chicken production routes.
const chickenProductionRouter = require("./Routes/Animal-routes/ChickenProduction-route");
app.use("/chickenProduction", chickenProductionRouter);

//Goat milk production routes.
const goatMilkProductionRouter = require("./Routes/Animal-routes/GoatMilkProduction-route");
app.use("/goatMilkProduction", goatMilkProductionRouter);

//Goat meat production routes.
const goatMeatProductionRouter = require("./Routes/Animal-routes/GoatMeatProduction-route");
app.use("/goatMeatProduction", goatMeatProductionRouter);

//Test Image
const imageRouter = require("./Routes/ImageTest-route");
app.use("/imageTest", imageRouter);

//Agriculture production routes.
const agricultureRouter = require("./Routes/AgricultureProducion-route");
app.use("/agricultureProduction", agricultureRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT} !`);
});
