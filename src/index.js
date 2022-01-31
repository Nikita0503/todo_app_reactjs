import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( //начало приложения. Желательно не писать сюда что-то кроме подключения к сторонним сервисам (в начале этого делать не будете)
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root') // наше <App/> кладется в public/index.html в тег с id 'root'. React - это SPA (Single Page Application) приложения
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
