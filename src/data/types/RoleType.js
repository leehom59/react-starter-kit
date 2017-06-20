import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const Role = new ObjectType({
  name: 'Role',
  fields: {
    id: { type: new NonNull(IntType) },
    name: { type: StringType },
  },
});

export default Role;
