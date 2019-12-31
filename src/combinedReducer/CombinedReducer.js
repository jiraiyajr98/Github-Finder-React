import {combineReducers} from 'redux'
import  LoadingReducer  from '../reducers/LoadingReducer';
import  UsersReducer  from "../reducers/UsersReducer";

const CombineReducers = combineReducers({
    LoadingReducer,
    UsersReducer
});

export default CombineReducers;