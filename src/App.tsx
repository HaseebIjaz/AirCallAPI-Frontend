import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import AppRoutes from './routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
};

export default App;
