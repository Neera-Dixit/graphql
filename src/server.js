/**
 * node-graphql-app server
*/

 import express from 'express';
import expressGraphql from 'express-graphql';
import { buildSchema } from 'graphql';
import { SERVERPORT } from './config';

// GraphQL schema
var schema = buildSchema(`
    type Query {
        message: String
    }
`);
// Root resolver
var root = {
    message: () => 'Hello World!'
};

const graphqlApp = express();

graphqlApp.use('/graphql', expressGraphql({
  rootValue: root,
  schema,
  graphiql: true,
}));

graphqlApp.listen(SERVERPORT,() => {
  console.log(`Node server Listening at Port ${SERVERPORT}`);
})