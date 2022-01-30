import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import { persistStore } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export const persistor = persistStore(store);
