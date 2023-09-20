const express = require("express");
const router = express.Router();
const db = require("../model/schema");
const {
  updateFirstName,
  updateLastName,
  updateZipCode,
  updateEmailID,
  updateCountry,
  updateMobile,
  updateAddress2,
  updateState,
  updateAddress1,
} = require("../controllers/updateValues");
// const updateLastName=require("../controllers/updateValues")
// const updateEmailID=require("../controllers/updateValues")
// const updateMobile=require("../controllers/updateValues")
// const updateAddress1=require("../controllers/updateValues")
// const updateAddress2=require("../controllers/updateValues")
// const updateZipCode=require("../controllers/updateValues")
// const updateState=require("../controllers/updateValues")
// const updateCountry=require("../controllers/updateValues")

const cors = require("cors");
const app = express();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//   var corsOptions = {
//     origin: 'http://localhost:5173',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//    }

router.post("/", updateFirstName);
router.post("/last", updateLastName);
router.post("/", updateEmailID);
router.post("/", updateMobile);
router.post("/", updateAddress1);
router.post("/add2", updateAddress2);
router.post("/", updateState);
router.post("/", updateCountry);
router.post("/:id", updateZipCode);



router.put("/", (req, res) => {
  const {
    firstName,
    lastName,
    emailId,
    mobile,
    address1,
    address2,
    state,
    country,
    zipCode,
  } = req.body;


  console.log(req.body)
  const newuser = new db({
    firstName: firstName,
    lastName: lastName,
    emailId: emailId,
    mobile: mobile,
    address1: address1,
    address2: address2,
    state: state,
    country: country,
    zipCode: zipCode,
  });
  newuser.save();
  res.send(req.body);
});

// router.put("/", async (req, res) => {
//   // const {id}=req.body
//   //const {firstName,lastName}=req.body

//   const answer = await db.findByIdAndDelete("650686f3607058e49cf82903");
//   console.log(answer);
//   res.send(answer);
// });
// module.exports = router;

//  router.put("/",async (req,res)=>{
//   // const {id}=req.body
//   //const {firstName,lastName}=req.body

//       const answer=await db.findByIdAndUpdate("650686f3607058e49cf82903")
//     console.log((answer))
//       res.send(answer)
//    })
//    module.exports=router
module.exports = router;