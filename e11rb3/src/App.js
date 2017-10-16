import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Movies from './components/Movies'
import Movie from './components/Movie';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="main">
          <div id="content-container">
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/movies" component={Movies} />
            <Route path="/movie/:movieId" component={Movie} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
