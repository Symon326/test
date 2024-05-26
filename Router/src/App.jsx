// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <NavigationMenu ></NavigationMenu>
      </div>
    </Router>
  );
}

export default App;
