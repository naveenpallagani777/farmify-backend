const mongoose = require('mongoose');
// crop schema
const CropSchema = mongoose.Schema({
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
});

// crop model
const CropModel = mongoose.model('Crop',CropSchema);
module.exports = {CropModel};
