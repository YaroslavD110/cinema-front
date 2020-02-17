import * as React from "react";
import Link from "@app/Routing/Link";

// Config
import { headerMenu } from "shared/config";

export const HeaderMenu: React.FC = () => {
  return (
    <ul className="header__nav">
      {headerMenu.map(({ title, slug }) => (
        <li key={slug} className="header__nav-item">
          <Link slug={slug}>
            <a className="header__nav-link">{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenu;
