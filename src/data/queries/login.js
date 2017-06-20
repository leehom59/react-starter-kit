import {
  GraphQLString as StringType,
} from 'graphql';
import UserAccount from '../types/UserAccountType';

const login = {
  type: UserAccount,
  args: {
    account: {
      name: 'account',
      type: StringType,
    },
    password: {
      name: 'password',
      type: StringType,
    },
  },
  parseData(item) {
    return {
      id: item.id,
      account: item.account,
      email: item.email,
    };
  },
  resolve({ request }, { account, password }) {
    const req = request;

    const builder = req.db('user_account')
    .where('account', account)
    .andWhere('password', password)
    .first('*');

    const task = builder
    .then((row) => {
      if (row != null) return login.parseData(row);
      return null;
    });
    return task;
  },
};

export default login;
