const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username:{type:String,unique:true},
    phone:{type:String,unique:true},
    firstName:{type:String,default:''},
    lastName:{type:String,default:''},
    imageId:{type:String,default:''},
    password:{type:String,required:true}


})

module.exports=mongoose.model('users',userSchema);
