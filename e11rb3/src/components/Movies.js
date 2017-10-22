import React, { Component } from 'react';

class Movies extends Component {

  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }

    this.delete = this.delete.bind(this);
    this.fetchMovies = this.fetchMovies.bind(this);

    this.fetchMovies();
  }

  fetchMovies() {
    fetch('http://localhost:3001/movie/find-all')
    .then((response) => { return response.json() })
    .then((result) => {
      this.setState({ movies: result });
    })
    .catch((e) => { console.log(e); });
  }

  delete(e) {
    const _id = e.target.value;

    console.log(`_id: ${_id}`);

    fetch(
      'http://localhost:3001/movie/delete',
      {
        method: "POST",
        body: JSON.stringify({ _id }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
    .then(response => response.json())
    .then(result => {
      if (result) {
        alert('Successfully deleted ');
        this.fetchMovies();
      }
      else { alert('Failed to delete') }
    })
  }

  render() {
    return (
      <div className="content">
        <h2>Movies</h2>
        <table style={{ borderStyle: 'none' }}>
          <tbody>
            {
              this.state.movies.map((movie) => {
                return (
                  <tr key={movie._id}>
                    <td><a href={`/movie/${movie._id}`}>{movie.title}</a></td>
                    <td><button value={movie._id} onClick={this.delete}>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

        <a href="/movies/add">Add New Movie</a>
      </div>
    );
  }
}

export default Movies;
