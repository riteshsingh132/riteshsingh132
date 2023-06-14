import React from 'react'
import Comp3 from "./Comp3"

function Comp2({ myName }) {
  return (
    <div>
       <h1>Comp2</h1>
        <Comp3 name={myName}/>
        
        
    </div>
  )
}

export default Comp2