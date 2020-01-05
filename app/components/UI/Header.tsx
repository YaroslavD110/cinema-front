import * as React from "react";

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = props => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__content">
              {/* header logo */}
              <a href="index.html" className="header__logo">
                <img src="img/logo.svg" alt="" />
              </a>
              {/* end header logo */}

              {/* header nav */}
              <ul className="header__nav">
                {/* dropdown */}
                <li className="header__nav-item">
                  <a
                    className="dropdown-toggle header__nav-link"
                    href="#"
                    role="button"
                    id="dropdownMenuHome"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Home
                  </a>

                  <ul
                    className="dropdown-menu header__dropdown-menu"
                    aria-labelledby="dropdownMenuHome"
                  >
                    <li>
                      <a href="index.html">Home slideshow bg</a>
                    </li>
                    <li>
                      <a href="index2.html">Home static bg</a>
                    </li>
                  </ul>
                </li>
                {/* end dropdown */}

                {/* dropdown */}
                <li className="header__nav-item">
                  <a
                    className="dropdown-toggle header__nav-link"
                    href="#"
                    role="button"
                    id="dropdownMenuCatalog"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Catalog
                  </a>

                  <ul
                    className="dropdown-menu header__dropdown-menu"
                    aria-labelledby="dropdownMenuCatalog"
                  >
                    <li>
                      <a href="catalog.html">Catalog</a>
                    </li>
                    <li>
                      <a href="details.html">Movie Detail</a>
                    </li>
                  </ul>
                </li>
                {/* end dropdown */}

                <li className="header__nav-item">
                  <a href="pricing.html" className="header__nav-link">
                    Pricing Plan
                  </a>
                </li>

                <li className="header__nav-item">
                  <a href="faq.html" className="header__nav-link">
                    Help
                  </a>
                </li>

                {/* dropdown */}
                <li className="dropdown header__nav-item">
                  <a
                    className="dropdown-toggle header__nav-link header__nav-link--more"
                    href="#"
                    role="button"
                    id="dropdownMenuMore"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="icon ion-ios-more"></i>
                  </a>

                  <ul
                    className="dropdown-menu header__dropdown-menu"
                    aria-labelledby="dropdownMenuMore"
                  >
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="profile.html">Profile</a>
                    </li>
                    <li>
                      <a href="signin.html">Sign In</a>
                    </li>
                    <li>
                      <a href="signup.html">Sign Up</a>
                    </li>
                    <li>
                      <a href="forgot.html">Forgot password</a>
                    </li>
                    <li>
                      <a href="privacy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="contacts.html">Contacts</a>
                    </li>
                    <li>
                      <a href="404.html">404 Page</a>
                    </li>
                  </ul>
                </li>
                {/* end dropdown */}
              </ul>
              {/* end header nav */}

              {/* header auth */}
              <div className="header__auth">
                <form action="#" className="header__search">
                  <input
                    className="header__search-input"
                    type="text"
                    placeholder="Search..."
                  />
                  <button className="header__search-button" type="button">
                    <i className="icon ion-ios-search"></i>
                  </button>
                  <button className="header__search-close" type="button">
                    <i className="icon ion-md-close"></i>
                  </button>
                </form>

                <button className="header__search-btn" type="button">
                  <i className="icon ion-ios-search"></i>
                </button>

                {/* dropdown */}
                <div className="dropdown header__lang">
                  <a
                    className="dropdown-toggle header__nav-link"
                    href="#"
                    role="button"
                    id="dropdownMenuLang"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    EN
                  </a>

                  <ul
                    className="dropdown-menu header__dropdown-menu"
                    aria-labelledby="dropdownMenuLang"
                  >
                    <li>
                      <a href="#">English</a>
                    </li>
                    <li>
                      <a href="#">Spanish</a>
                    </li>
                    <li>
                      <a href="#">Russian</a>
                    </li>
                  </ul>
                </div>
                {/* end dropdown */}

                <a href="signin.html" className="header__sign-in">
                  <i className="icon ion-ios-log-in"></i>
                  <span>sign in</span>
                </a>
              </div>
              {/* end header auth */}

              {/* header menu btn */}
              <button className="header__btn" type="button">
                <span></span>
                <span></span>
                <span></span>
              </button>
              {/* end header menu btn */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
