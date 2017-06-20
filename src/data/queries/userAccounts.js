
import { GraphQLList as List } from 'graphql';
import UserAccount from '../types/UserAccountType';

const userAccounts = {
  type: new List(UserAccount),
  parseData(item) {
    return {
      id: item.id,
      account: item.account,
      email: item.email,
    };
  },
  resolve({ request }) {
    const req = request;
    const task = req.db('user_account')
    .select('*')
    .then((rows) => {
      const items = [];
      rows.map((item) => {
        items.push(item);
        return item;
      });
      return items;
    });
    return task;
  },
};

export default userAccounts;

