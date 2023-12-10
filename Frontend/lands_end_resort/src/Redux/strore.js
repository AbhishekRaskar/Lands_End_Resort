

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk'
import { reducer as LoginReducer } from "./LoginReducer/reducer"
import { reducer as SignupReducer } from "./RegisterReducer/reducer"



const rootReducer = combineReducers({
    LoginReducer,
    SignupReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
