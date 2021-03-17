import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ListSpacecrafts from './ListSpacecrafts';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ListSpacecrafts />
    </QueryClientProvider>
  );
};

export default App;
