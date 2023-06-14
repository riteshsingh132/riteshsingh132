import React from 'react';
import PropTypes from "prop-types"

// function CompTest({str,num,boolean,arr,obj}) {

// fname="Riesh" mbNo={7717741096} gender={true} adress={["city","state","Country"]} location={{city:"Dlehi",State:"South Delhi", Country:"India", pinCode:828207 }

function CompTest(props) {
// console.log(str,num,boolean,arr,obj)
    return (

    <div>
        <h1>CompTest</h1>
        <p>
            {toString(props.gender)}
            {props.fname}
            {props.mbNo}
            {props.adress.map((item,i)=>{
                return (
                    <li key={i}>{item}</li> 
                )
            })}
             {props.location.city} <br></br>
             {props.location.State}<br></br>
             {props.location.Country}<br></br>
             {props.location.pinCode}

         </p>
    </div>
    
    )
}

CompTest.propTypes={
    fname: PropTypes.string,
    mbNo: PropTypes.number,
    gender: PropTypes.number,
    adress: PropTypes.array,
    location: PropTypes.object,
}

export default CompTest