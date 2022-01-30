import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/login/loginActions';

const Logout = () => {

    const dispatch = useDispatch()

  return <div 
    style={{width: 60, height: 30, backgroundColor: 'green', cursor: 'pointer'}}
    onClick={() => dispatch(logout())}>
      <span>Logout</span>
  </div>;
}

export default Logout;