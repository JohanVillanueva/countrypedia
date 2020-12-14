import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import React from 'react';
import { ReactDefaultProps } from '../@types';

const COUNTRIES_GRAPHQL_ENDPPOINT = 'https://countries-274616.ew.r.appspot.com';

const client = new ApolloClient({
  uri: COUNTRIES_GRAPHQL_ENDPPOINT,
  cache: new InMemoryCache(),
});

const ApolloConnectedProvider: React.FC<ReactDefaultProps> = ({ children }: ReactDefaultProps) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default ApolloConnectedProvider;
