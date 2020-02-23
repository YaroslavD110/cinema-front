import * as React from "react";
import { observer } from "mobx-react";
import { Avatar } from "antd";

// Components
import Menu from "./Menu";
import { storeContext } from "@app/stores";
import Link from "@app/routing/Link";

interface IHeaderProps {}

export const Header: React.FC<IHeaderProps> = props => {
  const { userStore } = React.useContext(storeContext);

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header__content">
              <Link slug="home">
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

                {userStore.isAuthenticated ? (
                  <div className="header__avatar">
                    <Avatar icon="user" />
                  </div>
                ) : (
                  <Link slug="login">
                    <a className="header__sign-in">
                      <i className="icon ion-ios-log-in"></i>
                      <span>sign in</span>
                    </a>
                  </Link>
                )}
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

export default observer(Header);
