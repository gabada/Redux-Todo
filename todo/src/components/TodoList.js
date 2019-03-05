import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <ul>
            {props.tasks.map(task => (
                <Todo
                    task={task}
                    key={task.id}
                />
            ))}
        </ul>
    )
}

export default TodoList;