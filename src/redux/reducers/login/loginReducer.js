import { SET_EMAIL, SET_PASSWORD, SET_TOKEN } from "../../actions/login/loginActions";

const initialState = {
    email: '',
    password: '',
    token: null
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
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        default:
            return state;
    }
};

export default reducer;