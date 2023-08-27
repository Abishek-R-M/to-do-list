import React, { useState } from "react";
import ToDoForm from "./todoform";
import {v4 as uuidv4} from "uuid";
import ToDo from "./todo";
import EditToDoForm from "./edittodoform";
uuidv4();

function ToDoWrapper() {

    const [todos , setTodos] = useState([]);

    const addToDo = (todo) => {
        setTodos([...todos , {id: uuidv4() , task:todo , completed:false , isEditing:false}])
    }

    const toggletodo = (id) => {
        setTodos (
            todos.map((todo) => todo.id === id ? {...todo , completed : !todo.completed} : todo)
        )
    };

    const deletetodo = id => {
        setTodos(
            todos.filter(todo => todo.id !== id)
            )
    };

    const edittodo = id => {
        setTodos(
            todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo )
            )
    };

    const editTask = (task, id)  => {
        setTodos (
            todos.map(todo => todo.id === id ? {...todo, task, isEditing : !todo.isEditing} : todo)
        )
    }

    
    return (
        <div className="container">
        <h1 style = {{marginBottom: "40px"}}> Get Things Done!!!</h1>
            <ToDoForm props={addToDo}/>
            {todos.map((todo , index) => (
                todo.isEditing ? (<EditToDoForm edittodo={editTask} task={todo} /> ) :
                (<ToDo 
                key={index} 
                task={todo} 
                toggletodo={toggletodo}
                deletetodo={deletetodo}
                edittodo={edittodo}
                />)
                
            ))}
        </div>
    )
}

export default ToDoWrapper;