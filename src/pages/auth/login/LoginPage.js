import React from 'react';
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { setEmail, setPassword, login } from '../../../redux/actions/login/loginActions';
import { connect } from 'react-redux';

const LoginPage = (props) => {

  React.useEffect(() => { // функции setEmail и setPassword будут вызваны при демонтировании компонента (в момент перехода на другую страницу компонент будет удален с DOM-дерева)
    return () => { // если вернуть из функции useEffect-а функцию она будет вызвана при демонтировании компонента (аналог componentWillUnmount)
      props.setEmail('')
      props.setPassword('')
    }
  }, [])

  const navigate = useNavigate(); // хук useNavigate возвращает функцию navigate, которая дает возможность поменть роут (изменить сраницу, перейти на другую)

  const goToRegistration = () => { // переход на регистрацию
    navigate('../registration')
  }

  const goToTasks = () => { // переход на таски
    navigate('../tasks')
  }

  return <div className='container'>
    <input value={props.email} onChange={(event) => props.setEmail(event.target.value)} placeholder='email'/> {/** меняем эмейл в сторе на тот что вводит пользователь */}
    <input value={props.password} onChange={(event) => props.setPassword(event.target.value)} placeholder='password'/> {/** меняем пароль в сторе на тот что вводит пользователь */}
    <button onClick={() => props.login(goToTasks)}>Login</button> {/** передаем внутрь санки login функцию перехода на таски. И в случае успешного логина, ее вызываем */}
    <button onClick={goToRegistration}>Go to registration</button> {/** по клику вызываем функцию */} 
  </div>;
}

const mapStateToProps = (state) => {
  return {
    email: state.login.email,
    password: state.login.password
  }
}

const mapDispatchToProps = {
  setEmail: setEmail,
  setPassword: setPassword,
  login: login
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);