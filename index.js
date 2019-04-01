import express from 'express';
import graphqlHTTP from 'express-graphql';
import { Schema } from './src/data/schema';

const app = express();
const PORT = 3000;

// serving static files
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.send('GraphQL is Running');
});

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  // rootValue: root,
  graphiql: true,
}));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);