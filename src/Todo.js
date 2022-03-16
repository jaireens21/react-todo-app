import React from "react";
import useInputState from "./hooks/useInputState";
import useToggleState from "./hooks/useToggleState";
import "./Todo.css";

export default function Todo(props){

    const{id, task, completed, toggleTick, removeTask, saveEditedTask}=props;

    const[editedTask,handleEditFieldChange,resetEditField]=useInputState(task);

    const [isEditing, toggleIsEditing]=useToggleState(false);

    
    return(isEditing?
        <div className="EditForm">
            <form onSubmit={(e)=>{
                e.preventDefault();
                saveEditedTask(editedTask, id);
                toggleIsEditing();
            }}>
                <input type="text" value={editedTask} onChange={handleEditFieldChange}/>
                <button type="submit"><i class="material-icons">done</i></button>
            </form>
        </div>
        :
        <div className="Todo">
            
            <input type="checkbox" onChange={()=>toggleTick(id)} checked={completed}/>
            <span className={completed? "crossOut":""}>{task}</span>
        
            <button onClick={toggleIsEditing}><i class="material-icons">edit</i></button>
            <button onClick={()=>removeTask(id)}><i class="material-icons">delete</i></button>
            
            
        </div>
    )
}