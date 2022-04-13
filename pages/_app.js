import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import React from "react";
import Router from 'next/router';
import theme from '../components/styles/theme';
import Nprogress from "nprogress";
import 'semantic-ui-css/semantic.min.css';
import 'nprogress/nprogress.css';
import '../public/App.css';
import withData from '../lib/apollo'

Router.onRouteChangeStart = () => {
    Nprogress.start();
};

Router.onRouteChangeComplete = () => {
    Nprogress.done();
};

Router.onRouteChangeError = () => {
    Nprogress.done();
};


class MyApp extends App {
    static async getInitialProps( { Component , ctx } ) {
        let pageProps = {};
        if ( Component.getInitialProps ) {
            pageProps = await Component.getInitialProps( ctx ) || {};
        }
        pageProps.query = ctx.query;
        return { pageProps };
    }

    render() {
        const { Component , pageProps } = this.props;
        return (
            <>
                <ThemeProvider theme={ theme }>
                    <Component client={ this.props.apollo } { ...pageProps }/>
                </ThemeProvider>
            </>
        )
    }
}

export default withData( MyApp );
