const express = require('express');
const Controls = require("../Controllers/LoginSignup");

const FarmerRouter = express.Router();

FarmerRouter.post("/api/login",Controls.FarmerLogin);
FarmerRouter.post("/api/signup",Controls.FarmerSignup);

module.exports = FarmerRouter;
