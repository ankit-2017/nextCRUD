import RootReducer from './reducers'
import { createLogger } from "redux-logger";
import thunk  from 'redux-thunk'
import {createStore, applyMiddleware} from "redux";
let loggermiddleware = createLogger();

export const makeStore = (initialState) => {
    console.log('initial state in makeStore', initialState);
    return createStore(RootReducer, initialState, applyMiddleware(thunk, loggermiddleware));
};