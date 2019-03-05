import React from 'react';

// import './Todo.css';

const Todo = props => {
    return (
    <li
        className={props.task.completed ? "completed" : null}
        onClick={() => props.setCompleted(props.task.id)}
    >
        {props.task.task}
    </li>
    )
}

export default Todo;