const mongoose = require('mongoose');
// farmer schema
const farmerSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    crops : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Crop'
    }]
})

const farmerModel = mongoose.model('Farmer',farmerSchema);

// crop schema

const cropSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    units : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        default : 0
    },
    price : {
        type : Number,
        required : true
    },
    farmer : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmer',
        required : true
    }
})

const cropModel = mongoose.model('Crop',cropSchema);

module.exports = {farmerModel,cropModel};