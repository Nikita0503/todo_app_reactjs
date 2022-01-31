import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/auth/login/LoginPage';
import RegistrationPage from '../pages/auth/registration/RegistrationPage';
import TasksPage from '../pages/tasks/TasksPage';
import { ProtectedRoutes } from './ProtectedRoutes';

const AppWrapper = () => {

    return (
      <BrowserRouter> {/** Корневой компонент, внутри которого лежит настройка страниц приложения (роутинг) */}
        <Routes> {/** Контейтер, в котором лежат роуты */}
          <Route path='tasks' element={
            <ProtectedRoutes> {/** Обертка, которая будет перенаправлять пользоваьтеля на логин, в случае, если он не авторизован (token === null) */}
              <TasksPage/> {/** Для ProtectedRoutes это будет props.children */}
            </ProtectedRoutes>}/>
          <Route path='auth'> {/** Роут, который содержит в себе еще 2 роута (пути: 'auth/login' или 'auth/registration'). Просто контейтер в нашем случае */}
            <Route path='login' element={<LoginPage/>}/> {/** Обычный роут (обычная страница). path - путь к странице. element - компонент, который будет отображаться в качестве страницы */}
            <Route path='registration' element={<RegistrationPage/>}/>
          </Route>
          <Route path='*' element={<Navigate to='tasks'/>}/> {/** путь где стоит только '*' означает что эта страница будет отображаться при ошибке 404 (страница не найдена)
           * Navigate компонент выполняет переход на другую страницу (редирект). Можно поставить какой-то компонент и вместо редиректа будет отображаться он */}
        </Routes>
      </BrowserRouter>
    )
}

export default AppWrapper;