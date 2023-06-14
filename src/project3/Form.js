import React, { useEffect, useState } from 'react'
import classes from "./todo.module.css"
import { v4 as uuidv4 } from 'uuid';

function Form({input,setInput,todo,setTodo,editTodo,setEditTodo}) {
  
    // console.log(todo)

    const handleChange=(e)=>{
        setInput(e.target.value)
    }

    const updateTodo=(title,id)=>{
       const newTodo= todo.map((todo)=>todo.id === id ? {id,title}:todo)
       console.log(id)
       setTodo(newTodo)
       setEditTodo("")
        // console.log(newTodo)

    }



    const handleSubmit=(e)=>{
        e.preventDefault()
        
        if(editTodo){
            updateTodo(input,editTodo.id)
        }else{
            if(input!= ""){
                setTodo([...todo,{id:uuidv4(), title:input}])
                setInput("")
            }else{
                alert("Please Fill the Input Form Carefully...!")
            }
            
        }

    }
  



    useEffect(()=>{
        
        if(editTodo){
            setInput(editTodo.title)
        }else{
            setInput("")
        }
        
    },[editTodo])


    return (
    <>
        <form onSubmit={handleSubmit}>
            
            <input type='text' placeholder='Enter Todos...'  onChange={handleChange} className={classes.todoInput} value={input}/>
            <button type='submit' className={classes.todoButton}>{editTodo ? "Update": "Add"}</button>
            
         
        </form>
    </>
  )
}

export default Form