// import { data } from 'autoprefixer'
// import { data } from 'autoprefixer';
import React, { useState } from 'react'

const Landing = ({formValues}) => {
     //const [update, setUpdate] = useState("");
     const initialValues={
      firstName:"",
      lastName:"",
      emailId:"",
      mobile:"",
      address1:"",
      address2:"",
      state:"",
      country:"",
      zipCode:""
      }
     // useful states
      const [changedValues,setChangedValues]=useState(initialValues)
    const editValues=(e)=>{
      const {name,value} = e.target
      setChangedValues({...changedValues,[name]:value}) 
    }
    const handleMobileInput=(e)=>{
      setChangedValues({...changedValues,["mobile"]:e})
     // console.log(changedValues)
  }
  //  const [firstName,setFirstName]=useState()
  //  const [lastName,setLastName]=useState()
  //  const [emailId,setemailId]=useState()
  //  const [mobile,setMobile]=useState()
  //  const [address1,setAddress1]=useState()
  //  const [address2,setAddress2]=useState()
  //  const [state,setState]=useState()
  //  const [country,setCountry]=useState()
  //  const [zipCode,setZipCode]=useState()

    // const deletejson = async (url = 'http://localhost:8000/api') => {
    //     const response= await fetch(url, {
    //        method: 'POST',
    //        credentials: 'include',
    //        headers: {
    //          'Content-Type': 'application/json', // Set the content type to JSON
    //        },
    //        body: JSON.stringify({
    //          firstName: changedValues.firstName, // Use the new first name
    //        }),
    //      })
       
    //      const data= await response.json()
    //      //console.log(data)
    //      setUpdate(data)
    //   //  console.log(update)
    //    }
    const updateFirstName = async (url = 'http://localhost:8000/api') => {
      try{
        const response= await fetch(url, {
           method: 'POST',
           credentials: 'include',
           headers: {
             'Content-Type': 'application/json', // Set the content type to JSON
           },
           body: JSON.stringify({
            firstName: changedValues.firstName, // Use the new first name
           }),
         })
          // const data= await response.json()
          // console.log(data)
          const data=((await response.json()))
          console.log((data))
       } 
       catch(err){
         console.log(err)
       } 
      }
      const updateMobile = async (url = 'http://localhost:8000/api') => {
      try{
        const response= await fetch(url, {
           method: 'POST',
           credentials: 'include',
           headers: {
             'Content-Type': 'application/json', // Set the content type to JSON
           },
           body: JSON.stringify({
            mobile: changedValues.mobile, // Use the new first name
           }),
         })
          // const data= await response.json()
          // console.log(data)
          const data=((await response.json()))
          console.log((data))
       } 
       catch(err){
         console.log(err)
       } 
      }
      const updateCountry = async (url = 'http://localhost:8000/api') => {
        try{
          const response= await fetch(url, {
             method: 'POST',
             credentials: 'include',
             headers: {
               'Content-Type': 'application/json', // Set the content type to JSON
             },
             body: JSON.stringify({
                   country: changedValues.country, // Use the new first name
             }),
           })
            // const data= await response.json()
            // console.log(data)
            const data=((await response.json()))
            console.log((data))
         } 
         catch(err){
           console.log(err)
         } 
        }
        const updateLastName = async (url = 'http://localhost:8000/api/last') => {
          try{
            const response= await fetch(url, {
               method: 'POST',
               credentials: 'include',
               headers: {
                 'Content-Type': 'application/json', // Set the content type to JSON
               },
               body: JSON.stringify({
                lastName: changedValues.lastName, // Use the new first name
               }),
             })
              // const data= await response.json()
              // console.log(data)
              const data=((await response.text()))
              console.log((data))
           } 
           catch(err){
             console.log(err)
           } 
          }
          const updateEmailID = async (url = 'http://localhost:8000/api') => {
            try{
              const response= await fetch(url, {
                 method: 'POST',
                 credentials: 'include',
                 headers: {
                   'Content-Type': 'application/json', // Set the content type to JSON
                 },
                 body: JSON.stringify({
                 emailId : changedValues.emailId, // Use the new first name
                 }),
               })
                // const data= await response.json()
                // console.log(data)
                const data=((await response.json()))
                console.log((data))
             } 
             catch(err){
               console.log(err)
             } 
            }
            const updateAddress1 = async (url = 'http://localhost:8000/api') => {
              try{
                const response= await fetch(url, {
                   method: 'POST',
                   credentials: 'include',
                   headers: {
                     'Content-Type': 'application/json', // Set the content type to JSON
                   },
                   body: JSON.stringify({
                    address1: changedValues.address1, // Use the new first name
                   }),
                 })
                  // const data= await response.json()
                  // console.log(data)
                  const data=((await response.json()))
                  console.log((data))
               } 
               catch(err){
                 console.log(err)
               } 
              }
              const updateAddress2 = async (url = 'http://localhost:8000/api/add2') => {
                try{
                  const response= await fetch(url, {
                     method: 'POST',
                     credentials: 'include',
                     headers: {
                       'Content-Type': 'application/json', // Set the content type to JSON
                     },
                     body: JSON.stringify({
                      address2: changedValues.address2, // Use the new first name
                     }),
                   })
                    // const data= await response.json()
                    // console.log(data)
                    const data=((await response.blob()))
                    console.log((data))
                 } 
                 catch(err){
                   console.log(err)
                 } 
                }
                const updateState = async (url = 'http://localhost:8000/api') => {
                  try{
                    const response= await fetch(url, {
                       method: 'POST',
                       credentials: 'include',
                       headers: {
                         'Content-Type': 'application/json', // Set the content type to JSON
                       },
                       body: JSON.stringify({
                        state: changedValues.state, // Use the new first name
                       }),
                     })
                      // const data= await response.json()
                      // console.log(data)
                      const data=((await response.json()))
                      console.log((data))
                   } 
                   catch(err){
                     console.log(err)
                   } 
                  }
                  const updateZipCode = async (url = 'http://localhost:8000/api') => {
                    try{
                      const response= await fetch(url, {
                         method: 'POST',
                         credentials: 'include',
                         headers: {
                           'Content-Type': 'application/json', // Set the content type to JSON
                         },
                         body: JSON.stringify({
                          zipCode: changedValues.zipCode, // Use the new first name
                         }),
                       })
                        // const data= await response.json()
                        // console.log(data)
                        const data=((await response.json()))
                        console.log((data))
                     } 
                     catch(err){
                       console.log(err)
                     } 
                    }
     
  return (
    <div className='w-[50vw]  h-screen bg-pink-300 rounded-[2rem] flex flex-col justify-center items-center'>
    <aside className=' border-2 border-yellow-700 flex w-full justify-evenly'>
     <p className=' json-black'>{changedValues.firstName}</p> 
    <button className='order-1' onClick={()=>updateFirstName()}>EDIT</button>
    <button className='order-2' onClick={()=>deletejson()}>Delete</button>
    <input name='firstName' onChange={(e)=>editValues(e)}/>
    </aside>
    <aside className=' border-2 border-yellow-700 flex w-full justify-evenly'>
     <p>{changedValues.lastName}</p> 
    <button className='order-1' onClick={()=>updateLastName()}>EDIT</button>
    <button className='order-2' onClick={()=>deletejson()}>Delete</button>
    <input  name='lastName' onChange={(e)=>editValues(e)}/>
    </aside>
    <aside className=' border-2 border-yellow-700 flex w-full justify-evenly'>
     <p>{changedValues.emailId}</p> 
    <button className='order-1' onClick={()=>updateEmailID()}>EDIT</button>
    <button className='order-2' onClick={()=>deletejson()}>Delete</button>
    <input name='emailId'  onChange={(e)=>editValues(e)}/>
    </aside>
    <aside className=' border-2 border-yellow-700 flex w-full justify-evenly'>
     <p>{changedValues.mobile}</p> 
    <button className='order-1' onClick={()=>updateMobile()}>EDIT</button>
    <button className='order-2' onClick={()=>deletejson()}>Delete</button>
    <input name='mobile' onChange={(e)=>handleMobileInput(e)}/>
    </aside>
    <aside className=' border-2 border-yellow-700 flex w-full justify-evenly'>
     <p>{changedValues.address1}</p> 
    <button className='order-1' onClick={()=>updateAddress1()}>EDIT</button>
    <button className='order-2' onClick={()=>deletejson()}>Delete</button>
    <input name='address1' onChange={(e)=>editValues(e)}/>
    </aside>
    <aside className=' border-2 border-yellow-700 flex w-full justify-evenly'>
     <p>{changedValues.address2}</p> 
    <button className='order-1' onClick={()=>updateAddress2()}>EDIT</button>
    <button className='order-2' onClick={()=>deletejson()}>Delete</button>
    <input name='address2' onChange={(e)=>editValues(e)}/>
    </aside>
    <aside className=' border-2 border-yellow-700 flex w-full justify-evenly'>
     <p>{changedValues.state}</p> 
    <button className='order-1' onClick={()=>updateState()}>EDIT</button>
    <button className='order-2' onClick={()=>deletejson()}>Delete</button>
    <input name='state'  onChange={(e)=>editValues(e)}/>
    </aside> 
    <aside className=' border-2 border-yellow-700 flex w-full justify-evenly'>
     <p>{changedValues.country}</p> 
    <button className='order-1' onClick={()=>updateCountry()}>EDIT</button>
    <button className='order-2' onClick={()=>deletejson()}>Delete</button>
    <input name='country'  onChange={(e)=>editValues(e)}/>
    </aside>
    <aside className=' border-2 border-yellow-700 flex w-full justify-evenly'>
     <p>{changedValues.zipCode}</p> 
    <button className='order-1' onClick={()=>updateZipCode()}>EDIT</button>
    <button className='order-2' onClick={()=>deletejson()}>Delete</button>
    <input name='zipCode' onChange={(e)=>editValues(e)}/>
    </aside>
    {/* <aside className=' border-2 border-yellow-700 flex w-full justify-evenly'>
     <p></p> 
    <button className='order-1' onClick={()=>updatejson()}>EDIT</button>
    <button className='order-2' onClick={()=>deletejson()}>Delete</button>
    <input onChange={(e)=>editValues(e)}/>
    </aside>
    <aside className=' border-2 border-yellow-700 flex w-full justify-evenly'>
     <p></p> 
    <button className='order-1' onClick={()=>updatejson()}>EDIT</button>
    <button className='order-2' onClick={()=>deletejson()}>Delete</button>
    <input onChange={(e)=>editValues(e)}/>
    </aside>
    <aside className=' border-2 border-yellow-700 flex w-full justify-evenly'>
     <p></p> 
    <button className='order-1' onClick={()=>updatejson()}>EDIT</button>
    <button className='order-2' onClick={()=>deletejson()}>Delete</button>
    <input onChange={(e)=>editValues(e)}/>
    </aside> */}
    </div>
  )
}

export default Landing