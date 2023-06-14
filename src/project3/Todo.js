import React, { useEffect, useState } from 'react'
import classes from "./todo.module.css"
import Header from './Header'
import Form from "./Form"
import TodoList from './TodoList'

function Todo() {

    const [input,setInput]=useState("")
    const [todo,setTodo]=useState([])
    const [editTodo,setEditTodo]=useState(null)

    useEffect(() => {
        if (todo) {
            localStorage.setItem("todo-data", JSON.stringify(todo))
        }
    }, [todo])


  return (

    <div className={classes.todoContainer}>
        <div className={classes.todoWrapper}>
        <Header/>
        <Form 
        input={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
        editTodo={editTodo}
        setEditTodo={setEditTodo}

        />
        <TodoList 
        todo={todo}
        setTodo={setTodo}
        setEditTod={setEditTodo}
        
        />
        </div>
    </div>
  
    )

}

export default Todo

