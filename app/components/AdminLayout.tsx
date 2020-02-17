import * as React from "react";
import Head from "next/head";
import { Menu, Icon, Layout, Avatar, Dropdown, Button } from "antd";
import { observer } from "mobx-react";
import { storeContext } from "@app/stores";
import { headerMenu } from "shared/config";
import Link from "@app/Routing/Link";

interface IAdminLayoutProps {
  title: string;
}

const { Header, Sider, Content } = Layout;

const menu = (
  <Menu>
    {headerMenu.map(({ title, slug }) => (
      <Menu.Item>
        <Link slug={slug}>
          <a>{title}</a>
        </Link>
      </Menu.Item>
    ))}
  </Menu>
);

export const AdminLayout: React.FC<IAdminLayoutProps> = props => {
  const { title, children } = props;
  const { userStore } = React.useContext(storeContext);

  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Layout className="admin-wrap">
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="admin-logo-wrap">
            <img src="/img/logo.png" alt="Logo" className="admin-logo" />
          </div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="admin-header">
            <Icon
              className="trigger"
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={() => setCollapsed(!collapsed)}
            />

            <div className="admin-header-content">
              <Avatar>{userStore.userData?.username[0]}</Avatar>

              <Dropdown
                className="admin-header-menu"
                overlay={menu}
                placement="bottomRight"
              >
                <Button type="link">
                  <Icon type="menu" />
                </Button>
              </Dropdown>
            </div>
          </Header>

          <Content className="admin-content">{children}</Content>
        </Layout>
      </Layout>
    </>
  );
};

export default observer(AdminLayout);
