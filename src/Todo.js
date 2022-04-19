import React from "react";
import useInputState from "./hooks/useInputState";
import useToggleState from "./hooks/useToggleState";
import "./Todo.css";

export default function Todo(props){

    const{id, task, completed, toggleTick, removeTask, saveEditedTask}=props;

    const[editedTask,handleEditFieldChange,resetEditField]=useInputState(task);//a hook function; saves a piece of state(editedTask, initialised as "") & gives 2 functions to manipulate state(save changes & reset state)

    const [isEditing, toggleIsEditing]=useToggleState(false);//a hook function; saves another piece of state(isEditing, initialized as false) & gives a function to toggle the state

    
    return(isEditing?
        //if editing, show a form to edit the task
        <div className="EditForm">
            <form onSubmit={(e)=>{
                e.preventDefault();
                saveEditedTask(editedTask, id);//send the state(editedTask) upto the parent, for updating parents' state (todos)
                toggleIsEditing();
            }}>
                <input type="text" value={editedTask} onChange={handleEditFieldChange}/>
                <button type="submit"><i class="material-icons">done</i></button>
            </form>
        </div>
        :
        //if not editing, simply display the task
        <div className="Todo">
            
            <input type="checkbox" onChange={()=>toggleTick(id)} checked={completed}/>
            {/* if checkbox is altered(task is marked as done/not done), update the parents' state(todos) to reflect it */}

            <span className={completed? "crossOut":""}>{task}</span>
        
            <button onClick={toggleIsEditing}><i class="material-icons">edit</i></button>
            
            <button onClick={()=>removeTask(id)}><i class="material-icons">delete</i></button>
            {/* if task is deleted, update tge parent's state(todos) to reflect it */}
            
            
        </div>
    )
}