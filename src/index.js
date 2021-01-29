import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { Farms } from "./components/Farms"
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Farms />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);