const mongoose=require("mongoose")
require("dotenv").config()

var url="mongodb+srv://satwiknatural123:Remero123@satwik.flsvjds.mongodb.net/"
   const mongoConnection = async ()=>{
   try{

  await  mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("Datasbase connected")
   }
 catch(err){
console.log(err)
 }

   }
   module.exports=mongoConnection