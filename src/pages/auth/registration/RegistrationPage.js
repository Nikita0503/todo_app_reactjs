import React from 'react';
import './RegistrationPage.css'
import { useNavigate } from 'react-router-dom';
import { setEmail, setPassword, registration } from '../../../redux/actions/registration/registrationActions';
import { connect } from 'react-redux';

const RegistrationPage = (props) => {

  React.useEffect(() => { // функции setEmail и setPassword будут вызваны при демонтировании компонента (в момент перехода на другую страницу компонент будет удален с DOM-дерева)
    return () => { // если вернуть из функции useEffect-а функцию она будет вызвана при демонтировании компонента (аналог componentWillUnmount)
      props.setEmail('')
      props.setPassword('')
    }
  }, [])

  const navigate = useNavigate(); // хук useNavigate возвращает функцию navigate, которая дает возможность поменть роут (изменить сраницу, перейти на другую)

  const goToLogin = () => { // переход на логин
    navigate('../login')
  }

  const goToTasks = () => { // переход на таски
    navigate('../tasks')
  }

  return <div className='container'>
      <input value={props.email} onChange={(event) => props.setEmail(event.target.value)} placeholder='email'/> {/** меняем эмейл в сторе на тот что вводит пользователь */}
      <input value={props.password} onChange={(event) => props.setPassword(event.target.value)} placeholder='password'/> {/** меняем пароль в сторе на тот что вводит пользователь */}
      <button onClick={() => props.registration(goToTasks)}>Registration</button> {/** передаем внутрь санки registration функцию перехода на таски. И в случае успешной регистрации, ее вызываем */}
      <button onClick={goToLogin}>Go to Login</button> {/** по клику вызываем функцию */} 
  </div>;
}

const mapStateToProps = (state) => { //аналог useSelector, только для обертки connect. Указываем данные со стора, которые нужны внутри компонента
  return {
    email: state.registration.email,
    password: state.registration.password
  }
}

const mapDispatchToProps = { //аналог useDispatch, только для обертки connect.
  setEmail: setEmail,
  setPassword: setPassword,
  registration: registration
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage); //connect - HOC (higher order component), который вернет функцию, в которую мы кладем компонент для прокидивания в пропсы mapStateToProps и mapDispatchToProps
