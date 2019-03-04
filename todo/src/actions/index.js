export const ADD_TODO = 'ADD_TODO';
export const MARK_COMPLETED = 'MARK_COMPLETED';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = () => {
    return {
        type: ADD_TODO,
        payload: ''
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