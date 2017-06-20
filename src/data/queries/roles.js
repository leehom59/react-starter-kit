
import { GraphQLList as List } from 'graphql';
import Role from '../types/RoleType';

const Roles = {
  type: new List(Role),
  parseData(item) {
    return {
      id: item.id,
      name: item.name,
    };
  },
  resolve({ request }) {
    const req = request;
    const task = req.db('user_role')
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

export default Roles;

