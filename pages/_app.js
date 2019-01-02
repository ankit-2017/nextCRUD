import React from "react";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";
import ReduxToastr from 'react-redux-toastr'
// import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { makeStore } from "../Redux/store";



class MainApp extends App{
    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                    <ReduxToastr
                    timeOut={4000}
                    position="top-right"
                    transitionIn="bounceIn"
                    transitionOut="bounceOut"
                    progressBar={true}
                    closeOnToastrClick/>
                </Provider>
            </Container>
        );
    }
}
export default withRedux(makeStore)(MainApp);