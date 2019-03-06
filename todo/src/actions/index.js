export const ADD_TODO = 'ADD_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const MARK_COMPLETED = 'MARK_COMPLETED';
export const REMOVE_TASK = 'REMOVE_TASK';

export const addTodo = task => {
    return {
        type: ADD_TODO,
        payload: task
    }
}

export const clearCompleted = () => {
    return {
        type: CLEAR_COMPLETED
    }
}

export const handleChange = e => {
    return {
        type: HANDLE_CHANGE,
        payload: e.target.value
    }
}

export const markCompleted = id => {
    return {
        type: MARK_COMPLETED,
        payload: id
    }
}

export const removeTask = id => {
    return {
        type: REMOVE_TASK,
        payload: id
    }
}