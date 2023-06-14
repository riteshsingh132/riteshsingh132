import React, { useEffect, useState } from 'react'

function ApiFetch() {

    const [data,setData]=useState(null)
    console.log(data)
    const getData = async ()=>{
        try{
           const response = await fetch ("https://jsonplaceholder.typicode.com/users")
           const resData =await response.json() 
           
            setData(resData)        
        } catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        
        getData()
    },[])

    return (
    <div>
        API

    </div>
  )
}

export default ApiFetch