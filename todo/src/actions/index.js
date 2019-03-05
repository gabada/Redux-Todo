export const ADD_TODO = 'ADD_TODO';
export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const MARK_COMPLETED = 'MARK_COMPLETED';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addTodo = task => {
    console.log("hit");
    console.log(task);
    return {
        type: ADD_TODO,
        payload: task
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

export const removeTodo = () => {
    return {
        type: REMOVE_TODO,
        payload: ''
    }
}