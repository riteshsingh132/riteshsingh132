import React, { useState } from 'react'

function StateBool() {

    const [toggle,setToggle]=useState(false)
console.log(toggle)

  const changeHandler=()=>{

    setToggle(true)
  
  }
  return (
    <div>
        {String(toggle)}
      <button onClick={changeHandler}>Change</button>
    </div>
  )
}
export default StateBool