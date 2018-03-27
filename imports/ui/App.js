import React, { Component } from 'react';
import Dashboard from './Dashboard';

import Vote from './Vote';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import HallOfFame from './HallOfFame';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Dashboard} />
          <Route path="/voting" component={Vote} />
          <Route path="/hall" component={HallOfFame} />
        </div>
      </Router>
    );
  }
}

export default App;
