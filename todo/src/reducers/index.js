import { ADD_TODO, HANDLE_CHANGE, MARK_COMPLETED, REMOVE_TASK, CLEAR_COMPLETED } from '../actions';

const initialState = {
    inputText: '',
    tasks: [
        {
        id: 0,
        task: "Add things",
        completed: false
        }
    ]
}

export default (state = initialState, action ) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.payload
                ],
                inputText: ''
            };
        case CLEAR_COMPLETED:
            return {
                ...state,
                tasks: state.tasks.filter(task => !task.completed)
            };
        case HANDLE_CHANGE:
            return {
                ...state,
                inputText: action.payload
            };
        case MARK_COMPLETED:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload) {
                        return {
                            ...task,
                            completed: !task.completed
                        };
                    }
                    return task;
                })
            };
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        default:
        return state;
    }
}