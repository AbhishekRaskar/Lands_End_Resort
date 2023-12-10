import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionTypes"



const initialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
}


export const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SIGNUP_REQUEST:
            return { ...state, isLoading: true }

        case SIGNUP_FAILURE:
            return { ...state, isLoading: false, isError: true }

        case SIGNUP_SUCCESS:
            return { ...state, isLoading: false, isAuth: true }

        default:
            return state
    }
}