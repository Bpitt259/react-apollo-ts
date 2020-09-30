/* eslint-disable no-console */

import { ApolloServer, PubSub } from 'apollo-server';

import config from '../config';

import schema from './schema';

const { port, apiEndpoint } = config;
const pubsub = new PubSub();

const context = {
  pubsub,
};

const apolloServer = new ApolloServer({
  schema,
  context,
  subscriptions: {
    onConnect: (connectionParams, webSocket, context) => {
      console.log('subscription websocket connected');
    },
    onDisconnect: (webSocket, context) => {
      console.log('subscription websocket disconnected');
    },
  },
});

apolloServer.listen(port).then(({ subscriptionsUrl }) => {
  console.log(`app running on port ${port}`);
  console.log(`fetching API from ${apiEndpoint}`);
  console.log(`subscriptions running at ${subscriptionsUrl}`);
});
