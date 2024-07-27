const express = require("express");

const cors = require("cors");

require("express-async-errors");

const mongoose = require("mongoose");

const errorHandler = require("./handler/errorhandler");

require("dotenv").config();

const app = express();
app.use(cors());
mongoose
  .connect(process.env.mongodb_connection_string, {})
  .then(() => {
    console.log("Mongo DB connecion is successfll");
  })
  .catch(() => {
    console.log("Mongoose Connection is unsuccessfull");
  });

//const registers = require("./modules/users/controllers/registers");

const userRoute = require("./modules/users/users.route");

app.use(express.json());

require("./model/users");

app.use("/api/user", userRoute);

//app.post("/api/users/registers", registers);

app.use(errorHandler);

app.listen(8000, () => {
  console.log("Server start is Successfull");
});
