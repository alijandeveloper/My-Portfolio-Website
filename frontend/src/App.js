import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles.css';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;