import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectedRoutes = (props) => {
    const token = useSelector(state => state.login.token);
    console.log("token => ", token)

    if(!token){
        return <Navigate to='/auth/login' replace/>;
    }
    return props.children;
}