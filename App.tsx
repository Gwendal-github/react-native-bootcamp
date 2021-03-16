import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppLayout from './AppLayout';
import ListSpacecrafts from './ListSpacecrafts';

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout title="Starships" >
        <ListSpacecrafts />
      </AppLayout>
    </QueryClientProvider> 
  );
};

export default App;
