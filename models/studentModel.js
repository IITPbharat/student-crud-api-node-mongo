const mongoose=require('mongoose');
const studentSchema =new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    branch:{
        type:String,
        required:true
    }
});
module.exports= mongoose.model("Student",studentSchema);