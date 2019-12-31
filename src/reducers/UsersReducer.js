import {SET_USERS} from '../actionType/ActionType';
const UsersReducer = (state=[],action) =>{

    switch(action.type){

        case SET_USERS:
            return state = action.payload;

        default:
            return state;
    }

};

export default UsersReducer;