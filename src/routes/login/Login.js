/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { Button, Row, Form, Input } from 'antd';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './Login.css';

const FormItem = Form.Item;

class Login extends React.Component {

  render() {
    return (
      <div className={styles.form}>
        <div className={styles.logo}>
          <img alt={'logo'} src="./logo.png" />
          <span>your name</span>
        </div>
        <form>
          <FormItem hasFeedback>
            <Input size="large" placeholder="Username" />
          </FormItem>
          <FormItem hasFeedback>
            <Input size="large" type="password" placeholder="Password" />
          </FormItem>
          <Row>
            <Button type="primary" size="large" >
              Sign in
            </Button>
          </Row>
        </form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default withStyles(styles)(WrappedNormalLoginForm);
