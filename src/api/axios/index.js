import axios from 'axios';
import {store} from '../../redux/store';

const axiosInstance = axios.create({
    baseURL: 'http://192.168.0.108:5000/api/',
    timeout: 10000
});

axiosInstance.interceptors.request.use(async (config) => {
    const token = store.getState().login.token;

    if(!!token){
        config.headers['Authorization'] = 'Bearer ' + token
    }

    return config;
},
(error) => {
    Promise.reject(error);
})

export default axiosInstance;