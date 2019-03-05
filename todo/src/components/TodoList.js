import React from 'react';
import { connect } from 'react-redux';
import { markCompleted } from '../actions';

import './TodoList.css';

const TodoList = props => {
    console.log(props.tasks);
    return (
        <ul>
            {props.tasks.map(task => (
                <li key={task.id}
                    style={task.completed ? { textDecoration: 'line-through' } : null}
                    onClick={() => props.markCompleted(task.id)}
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

export default connect(mapStateToProps, { markCompleted })(TodoList);