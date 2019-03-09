import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

// console.log(movieData)

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map( (data) => <MovieCard title={data.title} IMDBRating={data.IMDBRating} genres={data.genres} poster={data.poster} />)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
