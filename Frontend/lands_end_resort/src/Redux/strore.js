

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from 'redux-thunk'
import { reducer as LoginReducer } from "./LoginReducer/reducer"



const rootReducer = combineReducers({
    LoginReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
