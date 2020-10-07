import {
  makeExecutableSchema,
  ApolloServer,
  SchemaDirectiveVisitor,
  addMockFunctionsToSchema,
} from 'apollo-server';
import { ValidateDirectiveVisitor } from '@profusion/apollo-validation-directives';

import schemaDirectives from '@directives';
import typeDefs from '@schemas';

const defaultPort = 4000;

const runServer = async (): Promise<void> => {
  let port = defaultPort;
  if (process.env.PORT) {
    const parsedPort = parseInt(process.env.PORT || '', 10);
    port = Number.isNaN(parsedPort) ? defaultPort : parsedPort;
  }

  const schema = makeExecutableSchema<ApplicationContext>({
    schemaDirectives,
    typeDefs,
  });

  addMockFunctionsToSchema({ schema });
  SchemaDirectiveVisitor.visitSchemaDirectives(schema, schemaDirectives);
  ValidateDirectiveVisitor.addValidationResolversToSchema(schema);

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen(port);
  console.log(`🚀  Server ready at ${url}`);
};

runServer().catch(error => {
  console.error('💥  Failed to start server:', error);
  process.exit(1);
});
