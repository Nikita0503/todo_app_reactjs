import { ADD_TASK, DELETE_TASK, SET_TASKS } from "../../actions/tasks/tasksActions";

const initialState = {
    tasks: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id != action.payload)
            }
        default:
            return state;
    }
};

export default reducer;