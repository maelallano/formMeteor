import React from 'react';
import HomePage from '../../pages/HomePage';
import SinglePage from '../../pages/SinglePage';
import LoginPage from '../../pages/LoginPage';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/single/:id" component={SinglePage} />
      <Route path='/login/' component={LoginPage} />
    </div>
  </Router>
)

export default App;