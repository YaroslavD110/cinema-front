import * as React from "react";
import NextApp from "next/app";
import { Provider } from "mobx-react";

// Stores
import stores from "@app/stores";

// Styles
import "@app/assets/styles/main.scss";

interface IAppProps {}

export class App extends NextApp<IAppProps> {
  public render() {
    const { Component } = this.props;

    return (
      <Provider {...stores}>
        <Component />
      </Provider>
    );
  }
}

export default App;
