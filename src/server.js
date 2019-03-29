/**
 * node-graphql-app server
*/

 import express from 'express';
import expressGraphql from 'express-graphql';
import { buildSchema } from 'graphql';
import { getCourse, getCourses, updateCourseTopic } from './courses';
import { SERVERPORT } from './config';

// GraphQL schema
var schema = buildSchema(`
    type Query {
      course(id: Int!): Course,
      courses(topic: String): [Course]
    },
    type Mutation {
      updateCourseTopic(id: Int!, topic: String!): Course
    },
    type Course {
      id: Int
      title: String
      author: String
      description: String
      topic: String
      url: String
    }
`);

// Root resolver
var root = {
  course: getCourse,
  courses: getCourses,
  updateCourseTopic: updateCourseTopic
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