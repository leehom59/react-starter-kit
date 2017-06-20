import {
  GraphQLObjectType as ObjectType,
  GraphQLInt as IntType,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from 'graphql';

const UserAccount = new ObjectType({
  name: 'UserAccount',
  fields: {
    id: { type: new NonNull(IntType) },
    account: { type: StringType },
    email: { type: StringType },
  },
});

export default UserAccount;
