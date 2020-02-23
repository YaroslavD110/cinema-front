import * as React from "react";
import Head from "next/head";

// UI
import Header from "app/components/UI/Header";
import Footer from "components/UI/Footer";

// Styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@app/assets/css/bootstrap-grid.min.css";
import "@app/assets/css/bootstrap-reboot.min.css";
import "@app/assets/css/ionicons.min.css";
import "@app/assets/css/main.css";

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
