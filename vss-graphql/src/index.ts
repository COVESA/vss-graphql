import { makeExecutableSchema, ApolloServer } from 'apollo-server';

import typeDefs from '@schemas';

const defaultPort = 4000;

const runServer = async (): Promise<void> => {
  let port = defaultPort;
  if (process.env.PORT) {
    const parsedPort = parseInt(process.env.PORT || '', 10);
    port = Number.isNaN(parsedPort) ? defaultPort : parsedPort;
  }

  const sqlite3 = require("sqlite3");
  const dbPath = "/usr/shared/db/opends.db";
  let sqlite_db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the opends database.');
  });

  const resolvers = {
    Query: {
      vehicle(parent, args, context, info) {
        let key = "";
        let object = new Object();
        let root = new Object();

        let promise = new Promise((resolve, reject) => {
          sqlite_db.each("SELECT key, value FROM vss_data", (err, row) => {
            key = row.key;
            let leafs = key.split('.');
            let leaf = leafs.pop();
            object = root;
            for (let elem of leafs) {
              if (object !== undefined) {
                if (!(elem in object)) {
                  object[elem] = new Object();
                }
                object = object[elem];
              }
            }
            if (object !== undefined && leaf !== undefined) object[leaf] = row.value;
          }, (err, n) => {
            if (err) {
              reject(err);
            } else {
              resolve(root);
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
