/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const PageType = new ObjectType({
  name: 'Page',
  fields: {
    id: { type: new NonNull(IntType) },
    parentId: { type: new NonNull(IntType) },
    ordering: { type: IntType },
    displayName: { type: StringType },
  },
});

export default PageType;
