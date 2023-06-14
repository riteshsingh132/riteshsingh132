import React, { useState } from 'react';
import "./Task2.css"

function Task2() {

  const [num, setNum] = useState(0);


  const updateValue=()=>{
    const newVal=Math.floor(Math.random()*4)
    console.log(newVal)
    setNum(newVal);
  }

  

  return (
    <div className='task2'>
      <butuon className="btn" onClick={updateValue}>Click Me</butuon>
      { num === 0 ? (
        <h1 style={{color: "red"}}>{num}</h1>
      ) : num === 1 ? (<h1 className='cond1'>{num}</h1>
      ): num === 2 ? (<h1 className='cond2'>{num}</h1>
      ): num === 3 ? (<h1 className='cond3'>{num}</h1>
      ):""

      
      }

    </div>
  )
}

export default Task2