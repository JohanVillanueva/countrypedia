import React from 'react';
import AppContextProvider from './context';
import { ApolloConnectedProvider } from './graphql';
import AppRouter from './routes';

const App: React.FC = () => (
  <ApolloConnectedProvider>
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  </ApolloConnectedProvider>
);

export default App;
