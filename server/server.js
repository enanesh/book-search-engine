const express = require('express');
//Imports the ApolloServer Class 
const { ApolloServer } = require("@apollo/server");


const { expressMiddleware } = require("@apollo/server/express4");
const {
  ApolloServerPluginDrainHttpServer,
} = require("@apollo/server/plugin/drainHttpServer");
const http = require("http");



// const path = require('path');
// const db = require('./config/connection');
// const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();
const httpServer = http.createServer(app);







app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
