import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';
import AppWrapper from './components/AppWrapper';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {

  return (
      <Provider store={store}> {/** Провайдер, который прокидывает store во все компоненты. Дает возможность получать данные или функцию dispatch с хранилища в любом компоненте  */} 
        <PersistGate persistor={persistor}> {/** Обертка, которая необходма для redux-persist */}
          <AppWrapper/> {/** Компонент-обертка, в котором находится роутер приложения */}
        </PersistGate>
      </Provider>
  );
}

export default App;
