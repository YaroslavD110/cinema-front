import * as React from "react";
import Head from "next/head";

// UI
import Header from "app/components/UI/Header";
import Footer from "components/UI/Footer";

interface ILayoutProps {
  title: string;
}

export const Layout: React.FC<ILayoutProps> = props => {
  const { title, children } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
