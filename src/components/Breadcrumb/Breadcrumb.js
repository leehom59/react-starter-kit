import React from 'react';
import { Breadcrumb as AntdBreadcrumb } from 'antd';

class Breadcrumb extends React.Component {
  render() {
    return (
      <AntdBreadcrumb style={{ margin: '12px 0' }}>
        <AntdBreadcrumb.Item>Home</AntdBreadcrumb.Item>
        <AntdBreadcrumb.Item>List</AntdBreadcrumb.Item>
        <AntdBreadcrumb.Item>App</AntdBreadcrumb.Item>
      </AntdBreadcrumb>
    );
  }
}

export default Breadcrumb;
