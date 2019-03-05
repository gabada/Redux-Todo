import React from 'react';
import { connect } from 'react-redux';
import { markCompleted } from '../actions';

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
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    // implicit return
        tasks: state.tasks
})

export default connect(mapStateToProps, { markCompleted })(TodoList);