const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const FarmerRouter = require("./Router/FarmerRoutes");

const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL)
.then(()=> {
    console.log("mongodb is connected...")
    app.listen(4000,()=> {
        console.log("server is started on localhost:4000...")
    })
}).catch((err) => {
    console.log(err);
});

app.use(FarmerRouter);

