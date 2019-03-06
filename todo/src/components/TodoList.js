import React from 'react';
import { connect } from 'react-redux';
import { markCompleted, removeTask } from '../actions';

import './TodoList.css';

const TodoList = props => {
    return (
        <div>
            {props.tasks.map(task => (
                <div key={task.id}
                    style={task.completed ? { textDecoration: 'line-through' } : null}
                    onClick={() => props.markCompleted(task.id)}
                    >
                    {task.task}
                    <button onClick={() => props.removeTask(task.id)}><strong>X</strong></button>
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    // implicit return
        tasks: state.tasks
})

export default connect(mapStateToProps, { markCompleted, removeTask })(TodoList);