import axiosInstance from "../../../api/axios";
import { setToken } from "../login/loginActions";

export const SET_EMAIL = "REGISTRATION::SET_EMAIL";
export const SET_PASSWORD = "REGISTRATION::SET_PASSWORD";

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

export const registration = (callback) => async (dispatch, getState) => {
    try{
        const email = getState().registration.email
        const password = getState().registration.password

        /*const response = await fetch('http://192.168.0.108:5000/api/auth/registration', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        const result = await response.json();
        if(result.token){
            dispatch(setToken(result.token))
        }else{
            alert(result.message)
        }*/

        const result = await axiosInstance.post('auth/registration', {
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