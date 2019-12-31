import { SET_USERS } from '../actionType/ActionType';

export const setUsersAction = (users) =>{

    return {
        type: SET_USERS,
        payload: users
    };

};