import React from 'react';
import Login from './Login';
import Register from './Register';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Login />
        <Register />
      </div>
  </Provider>
  );
};

export default App;
