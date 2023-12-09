// action.js

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./actionTypes";
import axios from "axios";

export const userLogin = (userData) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    return axios.post("https://land-end-resort.onrender.com/users/login", userData)
        .then((res) => {
            const { token, user } = res.data; // Destructure token and user from the response
            dispatch({ type: LOGIN_SUCCESS, payload: { token, userName: user.userName } });
            return { success: true, payload: token, userName: user.userName };
        })
        .catch((err) => {
            dispatch({ type: LOGIN_FAILURE, payload: err.message });
            return { success: false, error: err.message }; // Return the result
        });
};



// for LOGOUT

export const userLogout = () => (dispatch) => {
    // clear user data from local storage
    localStorage.clear();
    dispatch({ type: LOGOUT });
};
