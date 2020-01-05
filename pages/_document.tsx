import Document, { Html, Head, Main, NextScript } from "next/document";

export class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600"
          />
        </Head>

        <body>
          <Main />

          <div id="modals"></div>

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
