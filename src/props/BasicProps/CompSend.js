import React from "react";
import CompRecive from "./CompReceive"

function CompSend(){

    const x=20;
    const y=30;
    const name="Ritesh Singh"

    return (
        <div>
             <CompRecive x={x} secondNumber={y} name={name}/>
        </div>
    )

}

export default CompSend;