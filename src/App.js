import React from 'react';
import Counter from './Compnents/Counter';
import store from './Store/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter store={store} />
    </div>
  );
}

export default App;
