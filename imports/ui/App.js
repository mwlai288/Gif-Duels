import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Accounts from './Accounts';
import Vote from './Vote';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Accounts />
          <Route exact path="/" component={Dashboard} />
          <Route path="/voting" component={Vote} />
        </div>
        {/* <Dashboard /> */}
      </Router>
    );
  }
}

export default App;
