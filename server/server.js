import http from 'http';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
// import resolvers from './schema/resolvers';
// import schema from './generated/prisma.graphql';
import resolvers from './sampleResolvers';
import schema from './sampleSchema.graphql';
// import prisma from './prisma';

const server = new ApolloServer({
  // context: {
  //   prisma,
  // },
  resolvers,
  // typeDefs: schemaTwo,
  typeDefs: schema,
});

const app = express();
server.applyMiddleware({ app });

const PORT = 5000;

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  console.log(`Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`);
});

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => server.stop());
}
