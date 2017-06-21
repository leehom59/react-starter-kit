import React from 'react';
import { Table } from 'antd';
import Layout from '../../components/Layout';
import AccountList from './list';

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: 'account',
    dataIndex: 'account',
    key: 'account',
    render: text => <a href="http://www.google.com.tw">{text}</a>,
  }, {
    title: 'email',
    dataIndex: 'email',
    key: 'email',
  },
];

async function action(context) {
  const db = context.db;
  const dataSource = await db('user_account').select('*');
  return {
    chunks: ['account'],
    title: '帳號管理',
    component: (
      <Layout>
        <AccountList />
      </Layout>),
  };
}

export default action;
