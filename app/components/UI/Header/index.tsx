import * as React from "react";
import Link from "next/link";

// Components
import Menu from "./Menu";

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = props => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__content">
              <Link href="/" as="/">
                <a className="header__logo">
                  <img src="/img/logo.png" alt="Logo" />
                </a>
              </Link>

              <Menu />

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
