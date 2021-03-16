import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store/';
import Routes from '../Routes';

function App() {
  return (
    <Provider store={store}>
      <h1>Playtonic</h1>
      <Routes />
    </Provider>
  );
}

export default App;
