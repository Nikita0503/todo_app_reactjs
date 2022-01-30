import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import loginReducer from './login/loginReducer';
import registrationReducer from './registration/registrationReducer';
import taskCreatorReducer from './taskCreator/taskCreatorReducer';
import tasksReducer from './tasks/tasksReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['login']
}

const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    tasks: tasksReducer,
    taskCreator: taskCreatorReducer
});

export default persistReducer(persistConfig, rootReducer);