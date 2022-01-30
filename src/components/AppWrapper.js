import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/auth/login/LoginPage';
import RegistrationPage from '../pages/auth/registration/RegistrationPage';
import TasksPage from '../pages/tasks/TasksPage';
import { ProtectedRoutes } from './ProtectedRoutes';

const AppWrapper = () => {

    return (
      <BrowserRouter>
        <Routes>
          <Route path='tasks' element={
            <ProtectedRoutes>
              <TasksPage/>
            </ProtectedRoutes>}/>
          <Route path='auth'>
            <Route path='login' element={<LoginPage/>}/>
            <Route path='registration' element={<RegistrationPage/>}/>
          </Route>
          <Route path='*' element={<Navigate to='tasks'/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default AppWrapper;