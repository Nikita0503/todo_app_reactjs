import { SET_EMAIL, SET_PASSWORD } from "../../actions/registration/registrationActions";

const initialState = {
    email: '',
    password: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload,
            };
        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;