import React, { useState } from 'react'

function SingleState() {


    const [num, setNum]=useState(
    {
        first: "1",
        last: "2",
    }
    )
    const firstNum=parseInt(num.first) 
    

    const increm=()=>{
        setNum(firstNum +1 )
        console.log(firstNum)
    }

  return (
    <div>


            <button onClick={increm}>+ </button>
            <h1>{firstNum} </h1>
            {/* <h1>{num.last}0</h1> */}
            


    </div>
  )
}

export default SingleState