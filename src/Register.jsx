// import React, { useEffect, useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/bootstrap.css";
// import {Route, Routes, useNavigate} from "react-router-dom"
// import Home from "./Home";
// // import { info } from "autoprefixer";
// const Register = () => {
//   // const [phone, setPhone] = useState("");
//  // const [info, setInfo] = useState("");

//  const navigate=useNavigate()
//   const [update, setUpdate] = useState("");
//   const [isSubmit,setIsSubmit]=useState(false);
//   const initialValues={
//     firstName:"",
//     lastName:"",
//     emailId:"",
//     mobile:"",
//     address1:"",
//     address2:"",
//     state:"",
//     country:"",
//     zipCode:""
//     }
//    // useful states
//     const [formValues,setFormValues]=useState(initialValues)
//     const [formErrors,setFormErrors]=useState({})
//     //Validate finction logic starts
//    const validateForm=(values)=>{
//    const errors={}
//    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//   const regexMobile = /^\d{1,4}\d{6,14}$/;

//   const regexPincode = /^(\d{4}|\d{6})$/;
//   const regexName =/^[A-Za-z\s.'-]{5,}$/;
//   const regexAddress = /^[A-Za-z0-9\s.'-]+$/;
//   // conditional logic
//    if(!values.firstName){
//      errors.firstName="Firstname is required"
//    }
//    else if(!values.firstName.match(regexName)){
//      errors.firstName="not a valid firtsname"
//    }
//    else if(!values.lastName){
//     errors.lastName="lastname is required"
//    }
//    else if(!values.lastName.match(regexName)){
//      errors.lastName="not a valid lastname "
//    }
//     else if (!values.emailId){
//     errors.emailId="emailid is required"
//     }
//     else if (!values.emailId.match(regexEmail)){
//       errors.emailId=" not a valid emailid"
//       }
//      else if (!values.mobile){
//         errors.emailId="mobileno is required"
//         }
//         else if (!values.mobile.match(regexMobile)){
//           errors.emailId="not a valid mobilenumber " 
//           }
//       else if(!values.address1){
//         errors.address1="address1 is required"
//       } 
//       else if (!regexAddress.test(values.address1)){
//         errors.address1="not a valid address"
//         }
//         else if (!values.address2){
//           errors.address2="address2 is required"
//           }
//           else if (!regexAddress.test(values.address2)){
//             errors.address2="not a valid address2"
//         }
//         else if (!values.state){
//           errors.state="state is required"
//         }
//         else if (!values.country){
//           errors.country="country is required"
//           }
//         else if(!values.zipCode){
//          errors.zipcode="zipcode is required"
//         }
//         return errors
//    }
 
//   const handleMobileInput=(e)=>{
//      setFormValues({...formValues,["mobile"]:e})
//     // console.log(formValues)
//  }

//   const handleChange=(e)=>{
//     const {name,value} = e.target
//     setFormValues({...formValues,[name]:value}) 
//     // console.log(formValues)
//   }

//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     setIsSubmit(true)
//     setFormErrors(validateForm(formValues))
//      if(Object.keys(formErrors).length==0 && isSubmit){
//        navigate("/home")
//      }
//   }
    

// //  const testing=()=>{
// //   navigate("/home")
// //  }


//   const updateText = async () => {
//    const data= await fetch("http://localhost:8000/api", {
//       method: "PUT",
//       credentials: "include",
//     })
//     const response= await data.json()
//      setUpdate(response)
//   }
//     return (
//       <section className=" w-screen h-screen flex justify-center items-center">
//         {/* <pre>{JSON.stringify(formValues,undefined,2)}</pre> */}
//         <form  onSubmit={(e)=>handleSubmit(e)}    className="flex flex-col w-[800px] h-screen  bg-indigo-500 rounded-[2rem] justify-center items-center gap-[18px]">
//           <label className="text-white font-bold ">
//             <span className="mr-[20px]"> First Name : </span>
//             <input name="firstName"
//             onChange={(e)=>handleChange(e)}
//               className="w-[386px] border-2 border-blue-400 h-[30px] text-black rounded-[10px] placeholder:text-slate-400 placeholder:font-semibold"
//               placeholder="Enter your name"
//               type="text"
//               value={formValues.firstName}
//             />
//             {/* {alert(`${formErrors.firstName}`)} */}
//           </label>
//           <p className="text-2xl text-black">{formErrors.firstName}</p>
//           <label className="text-white font-bold ">
//             <span className="mr-[20px]"> Last Name : </span>
//             <input
//               name="lastName"
//               className="w-[386px] border-2 border-blue-400 h-[30px]  text-black rounded-[10px] placeholder:text-slate-400 placeholder:font-semibold"
//               placeholder="Enter your lastname"
//               type="text"
//             onChange={(e)=>handleChange(e)}
//               value={formValues.lastName}
//             />
//           </label>
//           <p className="text-2xl text-black">{formErrors.lastName}</p>
//           <label className="text-white font-bold ">
//             <span className="mr-[20px]"> Email Id : </span>
//             <input
//             name="emailId"
//               className="w-[386px] border-2 border-blue-400 h-[30px]  text-black rounded-[10px] placeholder:text-slate-400 placeholder:font-semibold"
//               placeholder="Enter your Email id"
//               type="text"
//             onChange={(e)=>handleChange(e)}
//               value={formValues.emailId}
//             />
//           </label>
//           <p className="text-2xl text-black">{formErrors.emailId}</p>
//           <div className="flex">
//             <span className="text-white font-bold mr-[50px]"> Mobile: </span>
//             <div className="w-[412px] h-[30px]">
//               <PhoneInput
            
//                 countryCodeEditable={true}
//                 enableSearch={true}
//                 value={formValues.mobile}
//                 //onBlur={(phone) => setPhone(phone)}
//               onChange={(e)=>handleMobileInput(e)}
//                 name="mobile"
//               />
//             </div>
//           </div>
//           <p className="text-2xl text-black">{formErrors.mobile}</p>
//           <label className="text-white font-bold ">
//             <span className="mr-[20px]"> Address 1 : </span>
//             <input
//               className="w-[386px] border-2 border-blue-400 h-[30px] mt-2  text-black rounded-[10px] placeholder:text-slate-400 placeholder:font-semibold"
//               placeholder="Enter your Address1"
//               type="text"
//               value={formValues.address1}
//               onChange={(e)=>handleChange(e)}
//               name="address1"
//             />
//           </label>
//           <p className="text-2xl text-black">{formErrors.address1}</p>
//           <label className="text-white font-bold ">
//             <span className="mr-[20px]"> Address 2 : </span>
//             <input
//               className="w-[386px] border-2 border-blue-400 h-[30px]  text-black rounded-[10px] placeholder:text-slate-400 placeholder:font-semibold"
//               placeholder="Enter your address2"
//               type="text"
//               value={formValues.address2}
//             onChange={(e)=>handleChange(e)}
//               name="address2"
//             />
//           </label>
//           <p className="text-2xl text-black">{formErrors.address2}</p>
//           <label className="text-white font-bold ">
//             <span className="mr-[20px]"> State : </span>
//             <input
//               className="w-[386px] border-2 border-blue-400 h-[30px]  text-black rounded-[10px] placeholder:text-slate-400 placeholder:font-semibold"
//               placeholder="Enter your State"
//               type="text"
//               value={formValues.state}
//             onChange={(e)=>handleChange(e)}
//               name="state"
//             />
//           </label>
//           <p className="text-2xl text-black">{formErrors.state}</p>
//           <label className="text-white font-bold ">
//             <span className="mr-[20px]"> Country : </span>
//             <input
//               className="w-[386px] border-2 border-blue-400 h-[30px]  text-black rounded-[10px] placeholder:text-slate-400 placeholder:font-semibold"
//               placeholder="Enter your Country"
//               type="text"
//               value={formValues.country}
//             onChange={(e)=>handleChange(e)}
//               name="country"
//             />
//           </label>
//           <p className="text-2xl text-black">{formErrors.country}</p>
//           <label className="text-white font-bold ">
//             <span className="mr-[20px]"> Zipcode : </span>
//             <input
//               className="w-[386px] border-2 border-blue-400 h-[30px]  text-black  rounded-[10px] placeholder:text-slate-400 placeholder:font-semibold"
//               placeholder="Enter your Zipcode"
//               type="number"
//             onChange={(e)=>handleChange(e)}
//               value={formValues.zipCode}
//               name="zipCode"
//             />
//           </label>
//           <p className="text-2xl text-black">{formErrors.zipcode}</p>
//           <button  onClick={(e)=>handleSubmit(e)} className="w-[150px] h-[50px] font-bold  bg-lime-400 rounded-full">
//             Submit 
//           </button>
//           <button onClick={()=>navigate("/home")}>test</button>
//         </form>
       
       

//       </section>
//     );
  
// };

// export default Register;
