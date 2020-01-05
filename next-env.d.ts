import { NextPageContext } from "next";

/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-images" />

declare global {
  type NextFC<P = {}, C = {}, CP = {}> = React.FC<P & CP> & {
    getInitialProps?: (ctx: NextPageContext & C) => Promise<P>;
  };

  declare namespace NodeJS {
    interface Process {
      browser: boolean;
    }
  }
}
