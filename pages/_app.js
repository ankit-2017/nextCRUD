import React from "react";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk  from 'redux-thunk'
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import RootReducer from '../Redux/reducers'

const makeStore = () => {
    return createStore(RootReducer, applyMiddleware(thunk));
};

class MainApp extends App{
    static getInitialProps({Component, ctx}) {
        console.log('ctx', ctx);
        console.log('component', Component);
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