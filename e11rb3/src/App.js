import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Movies from './components/Movies'
import Movie from './components/Movie';
import AddMovie from './components/AddMovie';

class App extends Component {
  render() {
    return (
      <div id="main">
        <Router>
          <div id="content-container">
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/movies" component={Movies} />
            <Route path="/movie/:movieId" component={Movie} />

            <Route exact={true} path="/movies/add" component={AddMovie} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
