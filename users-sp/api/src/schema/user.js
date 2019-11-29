const { User, UserTC } = require('../models/user');

const UserQuery = {
  userCount: UserTC.getResolver('count'),
};

const UserMutation = {
  userCreateOne: UserTC.getResolver('createOne'),
};

module.exports = {
  UserQuery,
  UserMutation,
};
