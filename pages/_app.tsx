import * as React from "react";
import NextApp, { AppContext } from "next/app";
import Nprogress from "nprogress";
import Router from "next/router";
import Cookies from "universal-cookie";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "nprogress/nprogress.css";
import "@app/assets/styles/main.scss";

import "isomorphic-fetch";

interface IAppProps {}

export class App extends NextApp<IAppProps> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};

    if (!process.browser) {
      const cookies = new Cookies(ctx.req?.headers.cookie);
      console.log(cookies.getAll());
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    Router.events.on("routeChangeStart", Nprogress.start);
    Router.events.on("routeChangeComplete", Nprogress.done);
    Router.events.on("routeChangeError", Nprogress.done);
  }

  public render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default App;
