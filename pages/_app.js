import React from "react";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk  from 'redux-thunk'
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import RootReducer from '../Redux/reducers'

const makeStore = (initialState, options) => {
    return createStore(RootReducer, initialState, applyMiddleware(thunk));
};

class MainApp extends App{
    static getInitialProps({Component, ctx}) {
        // console.log('hello in app.js', ctx);
        // // we can dispatch from here too
        // ctx.store.dispatch({type: 'FOO', payload: 'foo'});

        const pageProps = Component.getInitialProps ? Component.getInitialProps(ctx) : {};

        return {pageProps};

    }
    render() {
        // console.log('this.props in app.js', this.props);
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