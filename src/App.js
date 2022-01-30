import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';
import AppWrapper from './components/AppWrapper';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {

  return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppWrapper/>
        </PersistGate>
      </Provider>
  );
}

export default App;
