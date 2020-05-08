import { makeExecutableSchema, ApolloServer } from 'apollo-server';

import typeDefs from '@schemas';

const defaultPort = 4000;

const runServer = async (): Promise<void> => {
  let port = defaultPort;
  if (process.env.PORT) {
    const parsedPort = parseInt(process.env.PORT || '', 10);
    port = Number.isNaN(parsedPort) ? defaultPort : parsedPort;
  }

  const low = require('lowdb');
  const FileSync = require('lowdb/adapters/FileSync');

  const adapter = new FileSync('/usr/shared/db/db.json');
  const db = low(adapter);

  const resolvers = {
    Query: {
      vehicle(parent, args, context, info) {
        db.read();
        const veh = db.get('vehicle').value()
        console.log(JSON.stringify(veh));
        return veh;
      }
    }
  }

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });

  const server = new ApolloServer({
    schema,
    mocks: false,
  });

  const { url } = await server.listen(port);
  console.log(`🚀  Server ready at ${url}`);
};

runServer().catch(error => {
  console.error('💥  Failed to start server:', error);
  process.exit(1);
});
