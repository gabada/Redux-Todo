import React from 'react';
import { connect } from 'react-redux';
import { addTodo, handleChange } from '../actions';

class TodoForm extends React.Component {

    submitTodo = e => {
        e.preventDefault();
        const task = this.props.inputText;
        const newTask = {id: Date.now(), task, completed: false };
        this.props.addTodo(newTask)
    }

    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <input
                    type="text"
                    value={this.props.inputText}
                    name="todo"
                    onChange={this.props.handleChange}
                    placeholder="...todo"
                />
                <button onClick={this.submitTodo}>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        inputText: state.inputText
    }
}

export default connect(mapStateToProps, { handleChange, addTodo })(TodoForm);