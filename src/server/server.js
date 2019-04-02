/**
 * node-graphql-app server
*/

import express from 'express';
import expressGraphql from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { SERVERPORT } from './config';
import typeDefs from './schemas';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const graphqlApp = express();

graphqlApp.use('/graphql', expressGraphql({
  graphiql: true,
  schema,
}));

graphqlApp.listen(SERVERPORT,() => {
  console.log(`Node server Listening at Port ${SERVERPORT}`);
});

/*

Posts Query 

 {
	posts(postID: 2) {
	  id,
    description,
    author,
    comments {
      id,
          description,
    author,
    }
	} 
}

Comments Query 

{
	comments(postID: 1) {
	  id,
    description,
    author
	} 
}

Mutation 

mutation {
	postComment(input: {
    author: "neeraj-dixit",
    description: "heywwwwwwwww",
    postID:"1"
  }) {
      id,
      description,
       author,
      postID
  }
}
 */
