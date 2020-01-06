import * as React from "react";
import Link from "next/link";

// Config
import { headerMenu } from "shared/config";

export const HeaderMenu: React.FC = () => {
  return (
    <ul className="header__nav">
      {headerMenu.map(({ title, href, linkAs }) => (
        <li key={href} className="header__nav-item">
          <Link href={href} as={linkAs || href}>
            <a className="header__nav-link">{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenu;
