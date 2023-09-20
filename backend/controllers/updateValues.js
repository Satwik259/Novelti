const db=require("../model/schema")

const updateFirstName=async(req,res)=>{
    // const {id}=req.body
      const {firstName}=req.body
   // console.log(req.body)
    
    // console.log(JSON.stringify(req.body))
       //   console.log(firstName)
        if(firstName){
       const ans= await db.findOneAndUpdate({firstName:firstName},{
            firstName:firstName
          })
          res.send(ans)
        }
      //console.log((answer))
       
     }
     const updateLastName=async(req,res)=>{
      // const {id}=req.body
        const {lastName}=req.body
     // console.log(req.body)
     
      
      // console.log(JSON.stringify(req.body))
         //   console.log(firstName)
          if(lastName){
         const ans=   await db.findOneAndUpdate({lastName:"Surabattula"},{
              lastName:lastName
            })
            res.send(ans)
          }
        //console.log((answer))
         
       }
  
       const updateEmailID=async(req,res)=>{
        // const {id}=req.body
          const {emailID}=req.body
       // console.log(req.body)
        
        // console.log(JSON.stringify(req.body))
           //   console.log(firstName)
            if(emailID){
           const ans=   await db.findOneAndUpdate({emailID:emailID},{
                emailID:emailID
              })
              res.send(ans)
            }
          //console.log((answer))
          
         }
    
         const updateAddress1=async(req,res)=>{
          // const {id}=req.body
            const {address1}=req.body
         // console.log(req.body)
          
          // console.log(JSON.stringify(req.body))
             //   console.log(firstName)
              if(address1){
             const ans=   await db.findOneAndUpdate({address1:address1},{
                  address1:address1
                })
                res.send(ans)
              }
            //console.log((answer))
             
           }
      
           const updateAddress2=async(req,res)=>{
            // const {id}=req.body
              const {address2}=req.body
           // console.log(req.body)
            
            // console.log(JSON.stringify(req.body))
               //   console.log(firstName)
                if(address2){
              const ans =  await db.findOneAndUpdate({address2:address2},{
                   address2:address2
                  })
                  res.send(ans)
                }
              //console.log((answer))
               
             }
        
             const updateMobile=async(req,res)=>{
              // const {id}=req.body
                const {mobile}=req.body
             // console.log(req.body)
              
              // console.log(JSON.stringify(req.body))
                 //   console.log(firstName)
                  if(mobile){
                  const ans=  await db.findOneAndUpdate({mobile:mobile},{
                      mobile:mobile
                    })
                    res.send(ans)
                  }
                //console.log((answer))
                
               }
          
               const updateState=async(req,res)=>{
                // const {id}=req.body
                  const {state}=req.body
               // console.log(req.body)
                
                // console.log(JSON.stringify(req.body))
                   //   console.log(firstName)
                    if(state){
                   const ans=  await db.findOneAndUpdate({state:state},{
                        state:state
                      })
                      res.send(ans)
                    }
                  //console.log((answer))
                 
                 }
            
                 const updateCountry=async(req,res)=>{
                  // const {id}=req.body
                    const {country}=req.body
                 // console.log(req.body)
                  
                  // console.log(JSON.stringify(req.body))
                     //   console.log(firstName)
                      if(country){
                     const ans= await db.findOneAndUpdate({country:country},{
                          country:country
                        })
                        res.send(ans)
                      }
                    //console.log((answer))
                    
                   }
              
                   const updateZipCode=async(req,res)=>{
                    // const {id}=req.body
                      const {zipCode}=req.body
                      const id=req.params
                   // console.log(req.body)
                    
                    // console.log(JSON.stringify(req.body))
                       //   console.log(firstName)
                        if(zipCode){
                       const ans=   await db.findByIdAndUpdate(id,{
                            zipCode:zipCode
                          })
                          res.send(ans)
                        }
                      //console.log((answer))
                       
                     }
                
                                                                             
     

  module.exports = {updateFirstName,updateAddress1,updateZipCode,updateState,updateMobile,updateEmailID,updateCountry,updateLastName,updateAddress2}
    