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
        <Layout>
          <Navigation />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb />
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
              <div> test UI </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default OurLayout;
