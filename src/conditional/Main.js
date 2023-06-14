import React,{useState} from 'react'

function Main() {


    const [toggle,setToggle]=useState(true)
  
    console.log(toggle)
    const c={
        height:"25vh",
        width:"25vw",
        backgroundColor:"red",
    }

    const handleChange=()=>{
        setToggle(!toggle)
    }


  return (
    <div>
        <button onClick={handleChange}>{toggle ? "Hide":"Show"}</button>
        {/* {toggle ? <div style={c}></div> : null} */}
        {toggle && <div style={c}></div>}
    </div>
  )
}

export default Main