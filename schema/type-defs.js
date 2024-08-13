const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    age: Int!
  }

  type Query {
    users: [User!]!
  }
`;

module.exports = { typeDefs };
