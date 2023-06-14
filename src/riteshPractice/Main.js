import React, { useState } from 'react'
import Set1 from './childtoparent/Set1'

function Main() {

    const [data,setData]=useState("")

    const childToPar=(d)=>{
        setData(d)
    }
    

  return (
    <div>
        {/* <Set1 dataReceive={childToPar}/>
        // <h2>{data}</h2> */}
    </div>
  )
}

export default Main