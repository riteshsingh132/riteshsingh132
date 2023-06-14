import React from 'react'
import classes from "./todo.module.css";
import {FaCheckCircle,FaEdit,FaTrash} from "react-icons/fa"

function TodoList({ todo,setEditTod,setTodo}) {


    const handleEdit=({id})=>{
        // console.log(id)
        // const findTodo=todo.find((todo)=> todo.id===td)
        // console.log(id)
        const findTodo=todo.find((xy)=> xy.id === id )
        setEditTod(findTodo) 
        // console.log(findTodo)
    
    }

    const handleDelete=({id})=>{
      const deleteTodo = todo.filter((todo)=> todo.id !==id)
      console.log(deleteTodo)
      setTodo(deleteTodo)
    }


    return (
        <>
            {todo.map((rit) => {
                return <li className={classes.todoList}>

                    <div>
                        {rit.title}
                    </div>
                        
                        
                    <div className={classes.inconWrapper}>
                        <button className={classes.buttoncompeled}><FaCheckCircle/></button>
                        <button onClick={()=>handleEdit(rit)} className={classes.buttonEdit}><FaEdit/></button>
                        <button onClick={()=>handleDelete(rit)} className={classes.buttonDeleted}><FaTrash/></button>
                    </div>

                </li>

            })}


        </>
    )
}

export default TodoList