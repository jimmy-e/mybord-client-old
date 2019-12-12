import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import db from './db';

const server = new ApolloServer({
  context: { db },
  resolvers,
  typeDefs: importSchema('./server/schema.graphql'),
});

const app = express();
server.applyMiddleware({ app });

const port = 5000;

app.listen(
  { port },
  () => console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`),
);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}
