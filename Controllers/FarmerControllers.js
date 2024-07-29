const {CropModel} = require('../Models/Crop');

// add a crop

exports.AddCrop = async (req, res) => {
    try {
        let data = await CropModel.addCrop(req.body); 
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

