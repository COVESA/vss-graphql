import set from 'lodash/set';
import { Database } from 'sqlite3';
import { makeExecutableSchema, ApolloServer } from 'apollo-server';
import typeDefs from '@schemas';

const defaultPort = 4000;

const runServer = async (): Promise<void> => {
  let port = defaultPort;
  if (process.env.PORT) {
    const parsedPort = parseInt(process.env.PORT || '', 10);
    port = Number.isNaN(parsedPort) ? defaultPort : parsedPort;
  }

  const dbPath = "/usr/shared/db/opends.db";
  let sqlite_db = new Database(dbPath, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the opends database.');
  });

  const resolvers = {
    Query: {
      vehicle(parent, args, context, info) {
        var vssMap = Object();

        let promise = new Promise((resolve, reject) => {
          sqlite_db.each("SELECT key, value FROM vss_data", (err, row) => {
            if (err) {
              throw err;
            }
            set(vssMap, row.key, row.value);
          }, (err, n) => {
            if (err) {
              reject(err);
            } else {
              resolve(vssMap);
            }
          });
        });

        return promise;
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
