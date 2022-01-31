import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/login/loginActions';

const Logout = () => { //кнопка разлогина

  const dispatch = useDispatch() // useDispatch - хук, который возвращает функцию dispatch. Dispatch дает возможность изменить что-то в store (хранилище данных), путем прокидывания какого-то action в dispatch. Пример ниже

  return <div 
    style={{width: 60, height: 30, backgroundColor: 'green', cursor: 'pointer'}} // inline стили. Стили можно прописывать и таким методом (плохой практика), не только через .css файлы.
    onClick={() => dispatch(logout())}> {/** По клику на кнопку диспатчим logout экшн. logout - санка, которая присвоит token значение null, то бишь, разлогинит */}
      <span>Logout</span>
  </div>;
}

export default Logout;