const mongoose = require('mongoose');
// farmer schema
const FarmerSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phoneNumber : {
        type: Number,
        required : true,
        unique : true
    },
    crops : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Crop'
    }]
})

// farmer model
const FarmerModel = mongoose.model('Farmer',FarmerSchema);
module.exports = {FarmerModel};