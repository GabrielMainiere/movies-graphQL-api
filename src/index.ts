import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { makeExecutableSchema } from '@graphql-tools/schema';
import fs from 'fs';
import path from 'path';
import { createContext } from './context';
import { genreResolver } from './genre/genre.resolver';
import { actorResolver } from './actor/actor.resolver';
import { movieResolver } from './movie/movie.resolver';

const typeDefs = fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: {
    Query: {
      ...genreResolver.Query,
      ...actorResolver.Query,
      ...movieResolver.Query
    },
    Mutation: {
      ...genreResolver.Mutation,
      ...actorResolver.Mutation,
      ...movieResolver.Mutation
    },
  },
});

const server = new ApolloServer({ schema });

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    context: async () => createContext(),
    listen: { port: 4000 },
  });
  console.log(`🚀 Server running at ${url}`);
};

startServer();
