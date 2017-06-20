import { GraphQLList as List } from 'graphql';
import PageType from '../types/PageType';

const page = {
  type: new List(PageType),
  parseData(item) {
    return {
      id: item.id,
      parentId: item.parent_id,
      ordering: item.ordering,
      displayName: item.display_name,
    };
  },
  resolve({ request }) {
    const req = request;
    const task = req.db('page')
    .select('*')
    .then((rows) => {
      const items = [];
      rows.map((item) => {
        items.push(page.parseData(item));
        return item;
      });
      return items;
    });
    return task;
  },
};

export default page;
