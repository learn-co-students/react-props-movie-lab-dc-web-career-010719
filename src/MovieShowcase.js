import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map(movie => (
      <MovieCard movieObj={movie}/>
    ))
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
