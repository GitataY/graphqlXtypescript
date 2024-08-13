const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema/type-defs');
const { resolvers } = require('./schema/resolvers');

async function startServer() {
  const app = express();

  // Create an Apollo Server instance
  const server = new ApolloServer({ typeDefs, resolvers });

  // Start the Apollo Server
  await server.start();

  // Apply the Apollo server as middleware to the Express app
  server.applyMiddleware({ app });

  // Set the port
  const PORT = process.env.PORT || 4000;

  // Start the Express server
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

// Call the startServer function to start everything
startServer();
