import * as React from "react";
import NextApp, { AppContext } from "next/app";
import { Provider } from "mobx-react";
import Nprogress from "nprogress";
import Router from "next/router";

// Stores
import stores from "@app/stores";

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

    return (
      <Provider {...stores}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default App;
