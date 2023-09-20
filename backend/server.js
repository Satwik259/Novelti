const express=require("express")
const app=express()
const router=require("./router/Router")
//const cors=require("cors")

require("dotenv").config()
const database=require("./db/database")

 const port=process.env.PORT||8000
 
 

//middlewares
app.use(express.json())
 app.use("/api",router)
app.use(express.urlencoded({ extended: true }))
//app.use(cors({origin: 'http://localhost:5173'}))





 try{
    database()
    app.listen(8000,(req,res)=>{
        console.log(`The server is listening on Port ${port}`)
        
     })

     
 }
  catch(err){
  console.log(err)
  }