import React from "react";
import './Task.css';

const Task = ({ title, description, isCompleted }) => { 
    return (
       <>
            <div className={`task ${isCompleted ? "completed" : "not-completed"}`}>
             <h2>{title}</h2>
            <p>{description}</p>
            <span>{isCompleted ? "Виконано" : "Не виконано"}</span>
            </div>
       </>

    )
}
export default Task