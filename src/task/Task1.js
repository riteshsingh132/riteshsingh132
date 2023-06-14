import React, { useState } from 'react'
import "./Task1.css"
function Task1() {

    const [data,setData]=useState(true)
    // const [data1,setData1]=useState(true)
    // const fristDiv={
    //     backgroundColor: "red",
    //     width: "30vw",
    //     height: "30vh",
    //     display:"flex",
    //     float:"left",

    // }
    // const secondDiv={
    //         backgroundColor: "green",
    //         width: "30vw",
    //         height: "30vh",
    //         float:"left" 
    //     }
   

    const clickHandler=()=>{
        console.log(data)
        setData(!data)
        
    }
    // const clickHandlerSec=()=>{
    //     setData(!data)
        
    // }

  return (
    <div>
        <div className='container'>
        {/* {data ? <div style={abc} onClick={clickHandler}>{data ? "Hide":"Show"}</div>:<div style={abc1} onClick={clickHandler}>{data ? "Hide":"Show"}</div>} */}
        {/* {data ? <div style={abc}></div> : null}  */}
        {/* <div onClick={clickHandler}></div> */}
        {/* <div onClick={clickHandler}></div> */}
        <div className={data ? 'autoChange firstDiv':"firstDiv" }  onClick={clickHandler}  ></div>   
        <div className={!data ? 'autoChange secondDiv':"secondDiv" } onClick={clickHandler}></div>   
        </div>

    </div>
  )
}

export default Task1