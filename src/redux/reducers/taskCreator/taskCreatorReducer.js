import { SET_TASK_TITLE } from "../../actions/taskCreator/taskCreatorActions";

const initialState = {
    taskTitle: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK_TITLE:
            return {
                ...state,
                taskTitle: action.payload
            }
        default:
            return state;
    }
};

export default reducer;