import React from 'react';
import { connect } from 'react-redux';

import './TodoList.css';

const TodoList = props => {
    console.log(props.tasks);
    return (
        <ul>
            {props.tasks.map(task => (
                <li key={task.id}
                className={task.completed ? "completed" : null}
                onClick={() => props.setCompleted(task.id)}
                >
                {task.task}
            </li>
            ))}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, {})(TodoList);