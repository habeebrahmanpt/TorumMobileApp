import React from 'react';
import RootNavigation from './navigation';
import {Provider} from 'react-redux';
import {store} from './store';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};
export default App;
