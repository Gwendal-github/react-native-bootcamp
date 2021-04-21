import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
<<<<<<< Updated upstream
import ListSpacecrafts from './ListSpacecrafts';

const queryClient = new QueryClient();

const App = () => {
=======
import { LoginScreen as App } from './src/screens/index'
import AppLayout from './src/components/AppLayout';
import ListSpacecrafts from './src/components/ListSpacecrafts';
import StorybookUIRoot from './storybook';

// Should we show storybook instead of our app?
//
// ⚠️ Leave this as `false` when checking into git.
const SHOW_STORYBOOK = true;

const UI = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : App;
export default UI;


const queryClient = new QueryClient();

/*const App = () => {

>>>>>>> Stashed changes
  return (
    <QueryClientProvider client={queryClient}>
      <ListSpacecrafts />
    </QueryClientProvider>
  );
};*/

//export default App;
