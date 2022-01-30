import React from 'react';
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';
import { setEmail, setPassword, login } from '../../../redux/actions/login/loginActions';
import { connect } from 'react-redux';

const LoginPage = (props) => {

  React.useEffect(() => {
    return () => {
      props.setEmail('')
      props.setPassword('')
    }
  }, [])

  const navigate = useNavigate();

  const goToRegistration = () => {
    navigate('../registration')
  }

  const goToTasks = () => {
    navigate('../tasks')
  }

  return <div className='container'>
    <input value={props.email} onChange={(event) => props.setEmail(event.target.value)} placeholder='email'/>
    <input value={props.password} onChange={(event) => props.setPassword(event.target.value)} placeholder='password'/>
    <button onClick={() => props.login(goToTasks)}>Login</button>
    <button onClick={goToRegistration}>Go to registration</button>
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