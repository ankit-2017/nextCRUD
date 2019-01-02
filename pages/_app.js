import React from "react";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk  from 'redux-thunk'
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import RootReducer from '../Redux/reducers'
import { logger } from "redux-logger";

const makeStore = () => {
    return createStore(RootReducer, applyMiddleware(thunk));
};

class MainApp extends App{
    static getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? Component.getInitialProps(ctx) : {};
        return {pageProps};

    }
    render() {
        // console.log('store in app', this.props.store.getState());
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}
export default withRedux(makeStore)(MainApp);