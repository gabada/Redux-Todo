export const ADD_TODO = 'ADD_TODO';
export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const MARK_COMPLETED = 'MARK_COMPLETED';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = inputText => {
    return {
        type: ADD_TODO,
        payload: {
            task: inputText,
            id: Date.now(),
            completed: false
        }
    }
}

export const handleChange = e => {
    return {
        type: HANDLE_CHANGE,
        payload: e.target.value
    }
}

export const markCompleted = () => {
    return {
        type: MARK_COMPLETED,
        payload: ''
    }
}

export const removeTodo = () => {
    return {
        type: REMOVE_TODO,
        payload: ''
    }
}