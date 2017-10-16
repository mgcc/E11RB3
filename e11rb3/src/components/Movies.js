import React, { Component } from 'react';

class Movies extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/movie/find-all')
      .then((response) => { return response.json() })
      .then((result) => {
        this.setState({ movies: result });
      })
      .catch((e) => { console.log(e); });
  }

  render() {
    return (
      <div className="content">
        <h2>Movies</h2>
        <ol>
          {
            this.state.movies.map((movie) => {
              return (
                <li key={movie._id}><a href={`/movie/${movie._id}`}>{movie.title}</a></li>
              )
            })
          }
        </ol>
      </div>
    );
  }
}

export default Movies;
