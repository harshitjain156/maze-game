const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username:{type:String,},
    phone:{type:String},
    firstName:{type:String,default:''},
    lastName:{type:String,default:''},
    imageId:{type:String,default:''},
    password:{type:String,required:true}


})

module.exports=mongoose.model('users',userSchema);
