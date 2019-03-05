import { ADD_TODO, HANDLE_CHANGE, MARK_COMPLETED, REMOVE_TODO } from '../actions';

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
            }
        case HANDLE_CHANGE:
            return {
                ...state,
                inputText: action.payload
            }
        case MARK_COMPLETED:
            return state.map(task => {
                    if (task.id === action.payload) {
                        return {
                            ...state,
                            completed: !task.completed
                        }
                    } else {
                        return task;
                    }
                });
        case REMOVE_TODO:
            return {
                ...state,
            }
        default:
        return state;
    }
}