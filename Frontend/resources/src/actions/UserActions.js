import dispatcher from '../dispatcher';

export function userLogin(id, callback) {
    dispatcher.dispatch({
        type: "USER_LOGIN",
        id
    });
}