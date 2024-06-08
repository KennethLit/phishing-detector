import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DemoPage from './DemoPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
