import * as React from "react";
import { Menu, Layout, Icon } from "antd";

// Config
import { adminMenu } from "shared/config";

// Components
import Link from "@app/routing/Link";
import { Routing } from "@app/routing";

interface ILeftBarMenuProps {
  collapsed: boolean;
}

export const LeftBarMenu: React.FC<ILeftBarMenuProps> = props => {
  const { collapsed } = props;

  const renderMenuItems = () => {
    return adminMenu.map((item, index) =>
      item.subItems ? (
        <Menu.SubMenu
          key={index}
          title={
            <span className="admin-menu__left-item">
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </span>
          }
        >
          {item.subItems.map(item => (
            <Menu.Item key={Routing.getRoute(item.slug).path}>
              <Link slug={item.slug}>
                <a className="admin-menu__left-subitem">{item.title}</a>
              </Link>
            </Menu.Item>
          ))}
        </Menu.SubMenu>
      ) : (
        item.slug && (
          <Menu.Item key={Routing.getRoute(item.slug).path}>
            <Link slug={item.slug}>
              <a className="admin-menu__left-item">
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </a>
            </Link>
          </Menu.Item>
        )
      )
    );
  };

  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="admin-logo-wrap">
        <img src="/img/logo.png" alt="Logo" className="admin-logo" />
      </div>

      <Menu theme="dark" mode="inline" defaultSelectedKeys={[]}>
        {renderMenuItems()}
      </Menu>
    </Layout.Sider>
  );
};

export default LeftBarMenu;
