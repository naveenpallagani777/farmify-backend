const mongoose = require('mongoose');
const FarmerModel = require("./Farmer");

// crop schema
const CropSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "crop name is required"]
    },
    quantity : {
        type : Number,
        required : [true, "crop quantity is required"]
    },
    units : {
        type : String,
        required : [true, "crop units is required"]
    },
    rating : {
        type : Number,
        default : 0
    },
    price : {
        type : Number,
        required : [true, "crop price is required"]
    },
    farmer : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farmer',
        required : [true, "crop Farmer ID is required"]
    }
});

CropSchema.statics.addCrop = async function(cropData) {

    if (!cropData.name || !cropData.quantity || !cropData.units || !cropData.price || !cropData.farmer) {
        throw new Error("All fields are required!");
    }

    const existingCrop = await this.findOne({ farmer: cropData.farmer, name: cropData.name });
    if (existingCrop) {
        throw new Error("You already have this crop");
    }

    const farmer = await FarmerModel.findById(cropData.farmer);
    if (!farmer) {
        throw new Error("Farmer not found");
    }
    cropData.name = cropData.name.toLowerCase();
    const crop = await this.create(cropData);

    farmer.crops.push(crop._id);
    await farmer.save();

    return { farmer, crop };
};


// crop model
const CropModel = mongoose.model('Crop',CropSchema);
module.exports = {CropModel};
