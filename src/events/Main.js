import React,{useState} from 'react'


function Main() {
// 2
    // function handleClick(){
    //     console.log("ButtonClicked")
    //     alert("Buttun Clicked")
    // }
// // 3
//     function handleClick(e){
//         console.log(e)
//         alert("Buttun Clicked")
//     }
// 4
   // function handleClick(e){
    //         console.log(e)
    //         alert("Buttun Clicked")
    //     }

    // 5 A
    // const handleClick=(e)=>{
    //     e.stopPropagation()
    //     console.log("button Clicked")
    // }

        // 5 B  
    // const handleClick=(e)=>{
    //     e.stopPropagation()
    //     console.log("button Clicked")
    // }

    // const handleDivClick=function(){
    //     console.log("DivClicked");
    // }

    const [str,setStr] = useState("")

    const handleChange=(e)=>{
        console.log(e.target.value)
      
        setStr(e.target.value)
    }

    const handleSubmit=(e)=>{
         e.preventDefault()
    }

        return (
    <div>
        {/* 1 */}
        {/* <button onClick={()=>console.log("Button Clicked")}>Click</button> */}
        {/* 2 */}
        {/* <button onClick={()=>handleClick()}>Click</button> */}
        {/* 3 */}
        {/* <button onClick={(event)=>handleClick(event)}>Click</button> */}

        {/* 4 */}
        {/* <button onClick={()=>handleClick(":hello")}>Click</button> */}

        {/* 5 */}
        {/* <button onClick={handleClick}>Click</button> */}
    {/* qury1 how to send the data with function no 5 */}
        
        {/* 6 */}
        {/* <div onClick={handleDivClick}>
            <button onClick={handleClick}>Click</button>
        </div> */}

        <form onSubmit={handleSubmit}>
            <input placeholder='Enter Text' onChange={handleChange}/>
            <button type='submit'>Submit</button>
        </form>
        <div>
        </div>
            <h1>{str}</h1>
        </div>
  )
}

export default Main