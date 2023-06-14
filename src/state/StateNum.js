import React, { useState } from 'react'

function StateNum() {
  
        const [num,setNum]=useState(0)
    
    //     const handleChange=()=>{
    // }

    const increment=()=>{
        setNum(num-1)
    }

    const decrement=()=>{
        setNum(num+1)
    }

    return (
    <div>
        <button onClick={increment}>+</button>
        <h1>{num}</h1>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default StateNum