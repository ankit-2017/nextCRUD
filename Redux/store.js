import RootReducer from './reducers'
import { createLogger } from "redux-logger";
import thunk  from 'redux-thunk'
import {createStore, applyMiddleware} from "redux";
import nextConnectRedux from 'next-connect-redux'
let loggermiddleware = createLogger();


export const makeStore = (initialState) => {
    return createStore(RootReducer, initialState, applyMiddleware(thunk, loggermiddleware));
};
export const nextConnect = nextConnectRedux(makeStore)