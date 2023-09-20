const mongoose=require("mongoose")
const schema=mongoose.Schema

 const UserSchema=new schema({
    
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    address1:{
        type:String,
        required:true
    },
    address2:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    zipCode:{
        type:Number,
        required:true
    }

 })

 module.exports=mongoose.model("customers",UserSchema)