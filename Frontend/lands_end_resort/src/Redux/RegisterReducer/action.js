// action.js

import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionTypes";
import axios from "axios";

export const userSignup = (userData) => async (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });

    try {
        const response = await axios.post(
            "https://land-end-resort.onrender.com/users/register",
            userData
        );

        dispatch({ type: SIGNUP_SUCCESS });
        return { success: true, data: response.data };
    } catch (error) {
        dispatch({ type: SIGNUP_FAILURE });
        return { success: false, error: error.message };
    }
};
