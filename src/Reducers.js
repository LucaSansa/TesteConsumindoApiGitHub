import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducer';


const Reducers = combineReducers({

    autenticacao:AuthReducer

});

export default Reducers;