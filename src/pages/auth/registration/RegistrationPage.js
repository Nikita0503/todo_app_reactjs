import React from 'react';
import './RegistrationPage.css'
import { useNavigate } from 'react-router-dom';
import { setEmail, setPassword, registration } from '../../../redux/actions/registration/registrationActions';
import { connect } from 'react-redux';

const RegistrationPage = (props) => {

  React.useEffect(() => {
    return () => {
      props.setEmail('')
      props.setPassword('')
    }
  }, [])

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('../login')
  }

  const goToTasks = () => {
    navigate('../tasks')
  }

  return <div className='container'>
      <input value={props.email} onChange={(event) => props.setEmail(event.target.value)} placeholder='email'/>
      <input value={props.password} onChange={(event) => props.setPassword(event.target.value)} placeholder='password'/>
      <button onClick={() => props.registration(goToTasks)}>Registration</button>
      <button onClick={goToLogin}>Go to Login</button>
  </div>;
}

const mapStateToProps = (state) => {
  return {
    email: state.registration.email,
    password: state.registration.password
  }
}

const mapDispatchToProps = {
  setEmail: setEmail,
  setPassword: setPassword,
  registration: registration
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
