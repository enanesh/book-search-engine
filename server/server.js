const express = require('express');
const path = require('path');
const db = require('./config/connection');


// Import the ApolloServer class
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const {ApolloServerPluginDrainHttpServer} = require("@apollo/server/plugin/drainHttpServer");
const { typeDefs, resolvers } = require("./schemas");

const http = require("http");

const PORT = process.env.PORT || 3001;

const app = express();

const httpServer = http.createServer(app);


const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});



app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async({req}) => ({token:req.headers.token}),
    })
  );

  db.once("open", () => {
    httpServer.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at localhost:${PORT}/graphql`);
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);