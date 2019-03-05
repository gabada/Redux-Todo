import React from 'react';
import { connect } from 'react-redux';
import { handleChange } from '../actions';

const TodoForm = props => {
    return (
        <form>
            <input
                type="text"
                value={props.inputText}
                name="todo"
                onChange={props.handleChange}
                placeholder="...todo"
            />
            <button onClick={props.addTask}>Add Todo</button>
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        inputText: state.inputText
    }
}

export default connect(mapStateToProps, { handleChange: handleChange })(TodoForm);