import axiosInstance from "../../../api/axios";

export const SET_EMAIL = 'LOGIN::SET_EMAIL'
export const SET_PASSWORD = "LOGIN::SET_PASSWORD";
export const SET_TOKEN = "LOGIN::SET_TOKEN";

export const setEmail = (email) => {
    return {
        type: SET_EMAIL,
        payload: email
    }
}

export const setPassword = (password) => {
    return {
        type: SET_PASSWORD,
        payload: password
    }
}

export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: token
    }
}

export const login = (callback) => async (dispatch, getState) => {
    try{
        const email = getState().login.email
        const password = getState().login.password
        const result = await axiosInstance.post('auth/login', {
            email: email,
            password: password
        });
        dispatch(setToken(result.data.token))
        console.log('RESULT => ', result.data)
        if(!!callback){
            callback()
        }
    }catch(e){
        console.log("login error => ", e.response.data)
        let errors;
        if(e.response.data?.errors?.length){
            errors = e.response.data.errors.join(', ')
        }else{
            errors = e.response.data.message
        }
        alert(errors)
    }
}

export const logout = () => async (dispatch, getState) => {
    try{
        dispatch(setToken(null))
    }catch(e){
        console.log('logout error', e)
    }
}