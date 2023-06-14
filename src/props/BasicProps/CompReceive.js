import React from 'react'

// function CompReceive(props) {
//   return (
//     <div>
//         <h2>CompReceive</h2>
//         <p>{props.x}</p>
//         <p>{props.secondNumber}</p>
//         <p>{props.name}</p>
//     </div>
//   )
// }

// export default CompReceive;

function CompReceive({x,secondNumber,name}) {
    return (
      <div>
          <h2>CompReceive</h2>
          <p>{x}</p>
          <p>{secondNumber}</p>
          <p>{name}</p>
      </div>
    )
  }
  
  export default CompReceive;