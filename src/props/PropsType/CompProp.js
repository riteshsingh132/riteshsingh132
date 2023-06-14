import React from 'react'
import CompTest from './CompTest';
import PropTypes from "prop-types";

function CompProp() {
  return (
    <div>
        <h1>CompProp</h1>
        {/* <CompTest str={12354} num ={10} boolean={false} arr={[1,2,3]} obj={{a:10, b:20}}/> */}

        { <CompTest fname="Ritesh" mbNo={7717741096} gender={true} adress={["city","state","Country"]} location={{city:"Dlehi",State:"South Delhi", Country:"India", pinCode:828207 }}/>}

    </div>
  )
}




export default CompProp;