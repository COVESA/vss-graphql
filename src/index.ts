import { makeExecutableSchema, ApolloServer } from 'apollo-server';

import typeDefs from '@schemas';

const defaultPort = 4000;

const runServer = async (): Promise<void> => {
  let port = defaultPort;
  if (process.env.PORT) {
    const parsedPort = parseInt(process.env.PORT || '', 10);
    port = Number.isNaN(parsedPort) ? defaultPort : parsedPort;
  }

  const schema = makeExecutableSchema({
    typeDefs,
  });

  const server = new ApolloServer({
    schema,
    mocks: true,
  });

  const { url } = await server.listen(port);
  console.log(`🚀  Server ready at ${url}`);
};

runServer().catch(error => {
  console.error('💥  Failed to start server:', error);
  process.exit(1);
});
