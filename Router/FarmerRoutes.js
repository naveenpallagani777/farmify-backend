const express = require('express');
const Controls = require("../Controllers/LoginSignup");
const FarmerControls = require("../Controllers/FarmerControllers");

const Router = express.Router();

// login and signup controllers
Router.post("/api/login",Controls.Login);
Router.post("/api/signup",Controls.Signup);

// farmer controllers
Router.post("/api/addCrop",FarmerControls.AddCrop);

module.exports = Router;
