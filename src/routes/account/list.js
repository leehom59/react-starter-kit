import React from 'react';
import { Table } from 'antd';
import Link from '../../components/Link';

const columns = [{
  title: 'Id',
  dataIndex: 'id',
  sorter: true,
  // render: name => `${name.first} ${name.last}`,
  width: '20%',
}, {
  title: 'Account',
  dataIndex: 'account',
  filters: [
    { text: 'Male', value: 'male' },
    { text: 'Female', value: 'female' },
  ],
  width: '20%',
}, {
  title: 'Email',
  dataIndex: 'email',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <Link to="/account/detail" title="編輯">
        編輯
      </Link>
      <span className="ant-divider" />
      <Link to="/account/delete" title="刪除">
        刪除
      </Link>
      <span className="ant-divider" />
    </span>
  ),
}];

class AccountList extends React.Component {
  state = {
    data: [],
    pagination: {},
    loading: false,
  };
  componentDidMount() {
    this.refresh();
  }
  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.refresh({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }
  refresh = (params = {}) => {
    this.setState({ loading: true });
    const reqData = {
      query: `{
        userAccount {
          id, account, email, 
        }
      }`,
    };
    fetch(
      '/graphql',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqData),
        credentials: 'same-origin',
      },
    )
    .then(response => response.json())
    .then((response) => {
      const data = response.data.userAccount;
      const pagination = { ...this.state.pagination };
      // Read total count from server
      // pagination.total = data.totalCount;
      pagination.total = 200;
      this.setState({
        loading: false,
        data,
        pagination,
      });
    });
  }
  render() {
    return (
      <div>
        <Table
          columns={columns}
          rowKey={record => record.id}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
        />
      </div>
    );
  }
}

export default AccountList;
