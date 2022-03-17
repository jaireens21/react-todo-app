import React, {useState, useEffect} from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import "./TodoApp.css";
import Todo from "./Todo";

export default function TodoApp(){

    let initialTodos= JSON.parse(window.localStorage.getItem("todos")) || [
        {id:uuidv4(), task:"Wash the car", completed:false},
        {id:uuidv4(), task:"Meal prep", completed:false},
        {id:uuidv4(), task:"Shop for decor", completed:true}
    ];
    
    const [todos, setTodos]=useState(initialTodos);
    
    useEffect(()=>{
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function saveNewTask(newTask){
       setTodos([...todos,{id:uuidv4(), task:newTask, completed:false}]);
    }
    
    function toggleTick(id){
        setTodos(todos.map(todo=>todo.id===id? {...todo,completed:!todo.completed} : todo));
    }
    
    function removeTask(id){
        setTodos(todos.filter(todo=>todo.id!==id));
    }
    function saveEditedTask(editedTask,id){
        setTodos(todos.map(todo=>todo.id===id? {...todo,task:editedTask} : todo));
    }
    return(
        <div className="ToDoApp">
            <h1>MY TO-DO APP</h1>
            {/* <p>Made using Hooks in React</p> */}
            
            <TodoForm saveNewTask={saveNewTask}/>
            <div className="TodoList">
                {todos.map(todo=>(
                    <Todo 
                        key={todo.id}
                        id={todo.id}
                        completed={todo.completed}
                        task={todo.task}
                        toggleTick={toggleTick}
                        removeTask={removeTask}
                        saveEditedTask={saveEditedTask}
                    />
                    
                ))}
            </div>
            

        </div>
    )
}