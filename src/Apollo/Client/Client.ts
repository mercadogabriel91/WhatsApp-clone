import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://64.225.61.177/v1/graphql',
  cache: new InMemoryCache(),
});

export default client;
