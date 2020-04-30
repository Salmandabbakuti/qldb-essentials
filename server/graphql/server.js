const { GraphQLServer, PubSub } = require('graphql-yoga')
const resolvers = require("./src/resolvers");
const typeDefs = require("./src/typeDefs");
const pubsub = new PubSub();
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: {
    pubsub
  }
});
server.start(() => console.log('Server is running on localhost:4000'))
