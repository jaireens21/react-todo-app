import React from "react";
import useInputState from "./hooks/useInputState";
import "./TodoForm.css";

export default function TodoForm(props){
    const {saveNewTask}=props;
    const [newTask, handleInputChange, resetInputField]=useInputState();

    return(
        <form className="TodoForm" onSubmit={(e)=>{
            e.preventDefault();
            saveNewTask(newTask);
            resetInputField();
            }}>
            <input type="text" value={newTask} onChange={handleInputChange} placeholder="Add New Task"/>
            <button type="submit">Save</button>
        </form>
    )
}