import React from 'react';
import { connect } from 'react-redux';
import { addTodo, handleChange } from '../actions';

class TodoForm extends React.Component {

    submitTodo = () => {
        const task = this.props.inputText;
        const newTask = {task, completed: false, id: Date.now() };
        this.props.addTodo(newTask)
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.props.inputText}
                    name="todo"
                    onChange={this.props.handleChange}
                    placeholder="...todo"
                />
                <button type="button" onClick={this.submitTodo}>Add Todo</button>
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