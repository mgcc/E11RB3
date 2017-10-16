import React, { Component } from 'react';

class Movie extends Component {

  constructor(props) {
    super(props)

    this.state = {
      _id: this.props.match.params.movieId,
      title: '',
      director: '',
      year: '',
      actor: '',
      franchise: ''
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3001/movie/find-by-id/${this.state._id}`)
      .then((response) => { return (response.json()) })
      .then((result) => {
        this.setState({
          title: result.title,
          director: result.director,
          year: result.year,
          actor: result.actor,
          franchise: result.franchise
        })
      })
      .catch((e) => { console.log(e) });
  }

  render() {
    const { title, director, year, actor, franchise } = this.state;

    return (
      <div>
        Title: {title}<br/>
        Director: {director}<br/>
        Year: {year}<br/>
        Actor: {actor}<br/>
        Franchise: {franchise}<br/>
      </div>
    )
  }
}

export default Movie;