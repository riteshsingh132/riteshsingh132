import React, { useState } from 'react'

function StateString() {


    const [name, setName] = useState("Rit")
    
    const handleClick=()=>{
        setName("singh")
        console.log(name)
    }

  return (
    <div>
        <h1>{name}</h1>
        <button onClick={handleClick}>Change Name</button>

    </div>
  )
}

export default StateString