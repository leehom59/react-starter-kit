import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Header from '../Header';
import Navigation from '../Navigation';
import Breadcrumb from '../Breadcrumb';

const { Content } = Layout;

class OurLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <Layout>
        <Header />
        <Layout style={{ width: '100%', float: 'left' }}>
          <Navigation />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb />
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
                width: '80%',
                float: 'left',
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default OurLayout;
