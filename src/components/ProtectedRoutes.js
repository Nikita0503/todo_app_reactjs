import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectedRoutes = (props) => { // компонент-обертка, которая будет редиректить на логин, если пользователь не авторизован (token === null)
    const token = useSelector(state => state.login.token); // useSelector - хук, который позволяет получить какие-то данные с хранилища. state.'имя редьюсера'.'имя поля'. Когда токен меняется, компонент перерисуется
    console.log("token => ", token) // в консоли будем видеть этот лог, когда токен будет меняться (логин / разлогин)

    if(!token){ // если не залогинен - редирект на страницу авторизации
        return <Navigate to='/auth/login' replace/>;
    }
    return props.children; // если залогинен, возвращаем компонент, который лежит внутри <ProtectedRoutes>'Какой-то компонент'</ProtectedRoutes>
}

/* 
    props.children - то что лежит внутри компонента-обертки.
    В нашем случае:
    <ProtectedRoutes>
        <TasksPage/> 
    </ProtectedRoutes>

    Так вот, TaskPage - это и есть children. ProtectedRoutes - компонент-обертка
*/