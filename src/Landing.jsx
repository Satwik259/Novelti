// import { data } from 'autoprefixer'
// import { data } from 'autoprefixer';
import React, { useState } from 'react'

const Landing = ({formValues}) => {
     const [update, setUpdate] = useState("");
    
    const editFirstName=(e)=>{
           formValues.firstName=e.target.value
        // console.log(e.target)
    }


    const deleteText = async (url = 'http://localhost:8000/api') => {
        const response= await fetch(url, {
           method: 'POST',
           credentials: 'include',
           headers: {
             'Content-Type': 'application/json', // Set the content type to JSON
           },
           body: JSON.stringify({
             firstName: formValues.firstName, // Use the new first name
           }),
         })
        console.log((await response.json()))
      //  console.log(update)
       }

    const updateText = async (url = 'http://localhost:8000/api') => {
        const response= await fetch(url, {
           method: 'POST',
           credentials: 'include',
           headers: {
             'Content-Type': 'application/json', // Set the content type to JSON
           },
           body: JSON.stringify({
             firstName: formValues.firstName, // Use the new first name
           }),
         })
         const data= await response.json()
        // console.log(data)
        setUpdate(data)
       }
       
  return (
    <div className='w-[50vw] h-screen bg-pink-300 rounded-[2rem]'>
    <aside>
     <p>{update.firstName}</p> 
    <button onClick={()=>updateText()}>EDIT</button>
    <button onClick={()=>deleteText()}>Delete</button>
    <input onChange={(e)=>editFirstName(e)}/>
    </aside>
    </div>
  )
}

export default Landing