import React from 'react'
import Comp2 from './Comp2'

function 
Comp1() {

    const myName="Ritesh Developper"
    return (
    <div>
        <h1>Comp1</h1>
        <Comp2 myName={myName}/>
    </div>
  )
}

export default Comp1