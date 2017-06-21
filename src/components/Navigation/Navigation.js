/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

class Navigation extends React.Component {
  render() {
    return (
      <Sider width={200} style={{ background: '#fff', float: 'left', margin: '0 20px 0' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={<span><Icon type="user" />系統管理</span>}
          >
            <Menu.Item key="1">帳號管理</Menu.Item>
            <Menu.Item key="2">角色維護</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={<span><Icon type="laptop" />報表管理</span>}
          >
            <Menu.Item key="5">Chart A</Menu.Item>
            <Menu.Item key="6">Chart B</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={<span><Icon type="notification" />其他</span>}
          >
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default Navigation;
