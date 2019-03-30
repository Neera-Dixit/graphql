/**
 * node-graphql-app server
*/

import express from 'express';
import expressGraphql from 'express-graphql';
import { buildSchema } from 'graphql';
import { SERVERPORT } from './config';
import { initializeData, getRoot } from './initialise';

// GraphQL schema
var schema = buildSchema(`
    type Query {
      posts: [Post],
      post(id: ID!): Post,
      authors: [Person],
      author(id: ID!): Person
    },

    type Post {
      id: ID,
      author: Person,
      body: String
    },

    type Person {
      id: ID,
      postss: [Post],
      firstName: String,
      lastName: String
    }
`);

initializeData();

const graphqlApp = express();

graphqlApp.use('/graphql', expressGraphql({
  rootValue: getRoot(),
  schema,
  graphiql: true,
}));

graphqlApp.listen(SERVERPORT,() => {
  console.log(`Node server Listening at Port ${SERVERPORT}`);
});

/*

Query 

{
	author(id: 1) {
    id,
    firstName,
    lastName,
    postss {
      id,
      body
    }
  }
}
*/