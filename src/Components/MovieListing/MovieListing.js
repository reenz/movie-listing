import React, { Component } from 'react';
import FetchMovieList from '../Api.js';

class MovieListing extends Component {
  state = {
    movies: []
  }

  getMovies = async (title) => {
    const movieList = await FetchMovieList(title);
    this.setState({ movies: movieList});
  }

  componentDidMount = async () => {
    await this.getMovies("");
  }

  render() {
    const{ movies} = this.state;

    return(
      <div> {movies.map((movie, index) =>
        <span key={movie.imdbID} id={index}>
        <img src={movie.Poster} alt={movie.Title} />
        </span> )} 
      </div>
    )
  }
}

export default MovieListing;