import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/index';
import './App.css';
import AppRouter from '../router/index';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
