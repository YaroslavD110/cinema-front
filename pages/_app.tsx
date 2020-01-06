import * as React from "react";
import NextApp, { AppContext } from "next/app";
import { Provider } from "mobx-react";

// Stores
import stores from "@app/stores";

// Styles
import "@app/assets/styles/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
