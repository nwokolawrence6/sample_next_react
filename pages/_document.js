import Document , { Head , Main , NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import apple_touch_icon from '../assets/favicon/apple-touch-icon.png'
import favicon_32x32_png from '../assets/favicon/favicon-32x32.png'
import favicon_16x16_png from '../assets/favicon/favicon-16x16.png'
import icon from '../assets/favicon/favicon.ico'
import React from "react";


export default class MyDocument extends Document {
    static getInitialProps( { renderPage } ) {
        const sheet = new ServerStyleSheet();
        const page = renderPage( App => props => sheet.collectStyles( <App { ...props } /> ) );
        const styleTags = sheet.getStyleElement();
        return { ...page , styleTags };

    }

    render() {
        return (
            <html>
            <Head>
                <meta name="google-site-verification" content="iZl9r8aHWoU2rjR08OD066DRX5ZNuc7seWBfDUvJKLw" />
                <link rel="apple-touch-icon" sizes="180x180" href={ apple_touch_icon }/>
                <link rel="icon" type="image/png" sizes="32x32" href={ favicon_32x32_png }/>
                <link rel="icon" type="image/png" sizes="16x16" href={ favicon_16x16_png }/>
                <link rel="shortcut icon" href={ icon } type="image/x-icon"/>
                <meta name="theme-color" content="#ffffff"/>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-149754024-1"/>
                { this.props.styleTags }
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        );
    }
}
