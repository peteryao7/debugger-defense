import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});
  
export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});

export const signup = user => dispatch => (
    APIUtil.signup(user).then((res) => {
<<<<<<< HEAD
        const { token } = res.data;

        // const username = JSON.parse(res.config.data).username;
        console.log(res)
        localStorage.setItem("jwtToken", token);
        // localStorage.setItem("username", username);

        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token)
        // const user = Object.assign({}, decoded, { username }); 
        return dispatch(receiveCurrentUser(decoded))
=======
        debugger;
        return dispatch(receiveCurrentUser(processToken(res)))
>>>>>>> b695238d5a29a622077d4572814afde61d82f923
    }, err => (
        dispatch(receiveErrors(err.response.data))
    ))
);

export const login = user => dispatch => (
    APIUtil.login(user).then(res => {
<<<<<<< HEAD
        const { token } = res.data;
        const username = JSON.parse(res.config.data).username;

        localStorage.setItem('jwtToken', token);
        localStorage.setItem("username", username)
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        const user = Object.assign({}, decoded, { username }); 
        dispatch(receiveCurrentUser(user))
=======
        return dispatch(receiveCurrentUser(processToken(res)))
>>>>>>> b695238d5a29a622077d4572814afde61d82f923
    })
    .catch(err => {
        dispatch(receiveErrors(err.response.data));
    })
)

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken')
    APIUtil.setAuthToken(false)
    dispatch(logoutUser())
};

const processToken = (routerRes) => {
    debugger
    const { token } = routerRes.data;
    const username = JSON.parse(routerRes.config.data).username;

    localStorage.setItem('jwtToken', token);
    localStorage.setItem("username", username)

    APIUtil.setAuthToken(token);
    const decoded = jwt_decode(token);
    return Object.assign({}, decoded, { username });
}