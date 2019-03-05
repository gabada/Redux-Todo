import React from 'react';
import { connect } from 'react-redux';
import { addTodo, handleChange, clearCompleted } from '../actions';

class TodoForm extends React.Component {

    submitTodo = e => {
        e.preventDefault();
        const task = this.props.inputText;
        const newTask = {id: Date.now(), task, completed: false };
        this.props.addTodo(newTask)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitTodo}>
                    <input
                        type="text"
                        value={this.props.inputText}
                        name="todo"
                        onChange={this.props.handleChange}
                        placeholder="...todo"
                    />
                </form>
                <button onClick={this.submitTodo}>Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        inputText: state.inputText
    }
}

export default connect(mapStateToProps, { handleChange, addTodo, clearCompleted })(TodoForm);