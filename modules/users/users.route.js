const express = require("express");
const registers = require("./controllers/registers");
const userlogin = require("./controllers/userlogin");
const userdashboard = require("./controllers/userdashboard");
const auth = require("../../middleware/auth");

const userRoute = express.Router();

userRoute.post("/registers", registers);

userRoute.post("/login", userlogin);

userRoute.use(auth);

userRoute.get("/userdashboard", userdashboard);

module.exports = userRoute;
