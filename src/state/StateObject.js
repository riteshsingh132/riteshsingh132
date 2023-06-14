import React, { useState } from 'react'

function StateObject() {

    const [obj,setObje] =useState({name:"ritesh",gender:"Male",age:"30"})

    const handleChange=()=>{
        setObje({...obj,["name"]:"Singh"})
    }

  return (
    <div>
        <button onClick={handleChange}>Change</button>
        <h1>{obj.name}</h1>
        <h1>{obj.gender}</h1>
        <h1>{obj.age}</h1>
    </div>
  )
}

export default StateObject