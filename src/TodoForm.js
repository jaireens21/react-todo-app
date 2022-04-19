import React from "react";
import useInputState from "./hooks/useInputState";
import "./TodoForm.css";

export default function TodoForm(props){
    const {saveNewTask}=props;
    const [newTask, handleInputChange, resetInputField]=useInputState();//a hook function that saves a piece of state & gives us 2 functions to manipulate the state(save changes & reset state)

    return(
        <form className="TodoForm" onSubmit={(e)=>{
            e.preventDefault();
            saveNewTask(newTask);//sends the state(newTask) upto the parent, for updating parents' state(todos)
            resetInputField();//reset state to ""
            }}>
            <input type="text" value={newTask} onChange={handleInputChange} placeholder="Add New Task"/>
            <button type="submit">Save</button>
        </form>
    )
}