const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username :{
        type:String,
        require:[true ,'username is require']
    },
    email:{
        type:String,
        require:[true,'email address is require']
    },
    password:{
        type:String,
        require:[true,"password is require"]
    },
    blogs:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Blog",
        },
    ],
},
{timestamps:true},
);

const userModel = mongoose.model("User",userSchema);
module.exports= userModel;