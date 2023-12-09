import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
    userName: ""
};

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    // console.log("payloadddd", payload);
    switch (type) {
        case LOGIN_REQUEST:
            return { ...state, isLoading: true };

        case LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true };

        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, isAuth: true, token: payload.token, userName: payload.userName };
        case LOGOUT:
            return { ...initialState };
        default:
            return state;
    }
};
