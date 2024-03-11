import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
      </header>
    </div>
  );
}

export default App;
