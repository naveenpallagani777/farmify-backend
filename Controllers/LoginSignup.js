const FarmerModel = require("../Models/Farmer")
const jwt = require("jsonwebtoken");
require('dotenv').config();

const createToken = (_id) => {
    return jwt.sign({_id},process.env.MESSAGE,{expiresIn:"3d"});
  }

exports.Login = async (req,res) => {

    try{
        let data;
        if(req.body.user === "Farmer") data = await FarmerModel.login(req.body);
        token = createToken(data._id);
        console.log(data);
        res.status(200).json({
            user : data,
            token : token
        });

    }catch(err){
        res.status(400).json({error:err.message});
    }

}

exports.Signup = async (req,res) => {

    try{
        console.log(req.body);
        let data;
        if(req.body.user === "Farmer") data = await FarmerModel.signup(req.body);
        console.log(data);
        token = createToken(data._id);
        res.status(200).json({
            user : data,
            token : token
        });

    }catch(err){
        res.status(400).json({error:err.message});
    }

}