import React from 'react';
import { Layout, Menu } from 'antd';

const { Header: AntdHeader } = Layout;

class Header extends React.Component {
  render() {
    return (
      <AntdHeader className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">首頁</Menu.Item>
        </Menu>
      </AntdHeader>
    );
  }
}

export default Header;
