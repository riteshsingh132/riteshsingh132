import React from 'react';
import Child1 from './Child1';

function Parent() {
    
  var print=""

    const receivedFunc=(a,b)=>{
         return (a + " " +b)
    }


    return (
<div>
        <Child1 receivedFunc={receivedFunc} />
        <h1>{}</h1>
    </div>
  )
}

export default Parent;