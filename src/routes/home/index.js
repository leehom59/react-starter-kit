import React from 'react';
import Layout from '../../components/Layout';

function action() {
  return {
    chunks: ['home'],
    title: 'this home title',
    component: (
      <Layout>
        <div>this home</div>
      </Layout>),
  };
}

export default action;
