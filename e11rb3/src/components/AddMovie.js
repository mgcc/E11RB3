import React, { Component } from 'react';

export default class AddMovie extends Component {

  constructor() {
    super();

    this.state = {
      title: '',
      director: '',
      year: 2000,
      actor: '',
      franchise: ''
    }

    this.addMovie = this.addMovie.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.directorChange = this.directorChange.bind(this);
    this.yearChange = this.yearChange.bind(this);
    this.actorChange = this.actorChange.bind(this);
    this.franchiseChange = this.franchiseChange.bind(this);
  }

  addMovie(e) {
    e.preventDefault();

    fetch(
      `http://localhost:3001/movie/add`,
      {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => { return response.json() })
      .then(result => {
        if (result) {
          alert(`Added ${result.title}`);
        } else {
          alert(`Failed to add movie`);
        }
      });
  }

  titleChange(e) { this.setState({ title : e.target.value }); }
  directorChange(e) { this.setState({ director : e.target.value }); }
  yearChange(e) { this.setState({ year : e.target.value }); }
  actorChange(e) { this.setState({ actor : e.target.value }); }
  franchiseChange(e) { this.setState({ franchise : e.target.value }); }

  render() {
    return (
      <div>
        <h2>Add new Movie</h2>
        <form>
          <input type="text" placeholder="Title" onChange={this.titleChange} value={this.state.title} /><br />
          <input type="text" placeholder="Director" onChange={this.directorChange} value={this.state.director} /><br />
          <input type="number" placeholder="Year" onChange={this.yearChange} value={this.state.year} /><br />
          <input type="text" placeholder="Actor" onChange={this.actorChange} value={this.state.actor} /><br />
          <input type="text" placeholder="Franchise" onChange={this.franchiseChange} value={this.state.franchise} /><br />

          <button onClick={this.addMovie}>Add Movie</button>
        </form>
      </div>
    );
  }
}