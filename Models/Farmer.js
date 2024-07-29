const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// farmer schema
const FarmerSchema = mongoose.Schema({
    userName : {
        type : String,
    },
    password : {
        type : String,
        required : true
    },
    phoneNumber : {
        type: String,
        required : true,
        unique : true
    },
    crops : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Crop'
    }]
})
FarmerSchema.statics.login = async function (data) {

    if (data){
        if(data.phoneNumber.trim() === "") throw Error("phone number is required");
        else if(data.password.trim() === "") throw Error("password is required");
        else if(data.phoneNumber.length !== 10) throw Error("enter correct phone number");

        let user = await this.findOne({phoneNumber : data.phoneNumber});
        if (!user) throw Error("you don't have account");
        let flag = await bcrypt.compare(data.password,user.password);
        if (!flag) throw Error ("incorrect password");

        user = await user.populate('crops');

        return user;
    }

}

FarmerSchema.statics.signup = async function (data)  {

    if (data){
        if(data.phoneNumber.trim() === "") throw Error("phone number is required");
        else if(data.password.trim() === "") throw Error("password is required");
        else if(data.phoneNumber.length!== 10) throw Error("enter correct phone number");
        else if(data.password.length < 4) throw Error("password is required");

        let ex = await this.findOne({ phoneNumber : data.phoneNumber });
        if(ex) throw Error("Username already exists");

        let salt = await bcrypt.genSalt(10);
        data.password =  await bcrypt.hash(data.password, salt);

        var user = this.create(data);
        return user;
    }

}

// farmer model
const FarmerModel = mongoose.model('Farmer',FarmerSchema);
module.exports = FarmerModel;