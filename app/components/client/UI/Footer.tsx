import * as React from "react";

interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = props => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer__content">
              <a href="index.html" className="footer__logo">
                <img src="/img/logo.png" alt="Logo" />
              </a>

              <nav className="footer__nav">
                <a href="about.html">About Us</a>
                <a href="contacts.html">Contacts</a>
                <a href="privacy.html">Privacy Policy</a>
              </nav>

              <button className="footer__back" type="button">
                <i className="icon ion-ios-arrow-round-up"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
