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

  handleSearch = async (event) => {
    let title = event.target.value;
    await this.getMovies(title);
  }

  render() {
    const{ movies} = this.state;
  
    return(
      <div>
        <input className="SearchInput" type="text" onChange={this.handleSearch} />
        <div> {movies.map((movie, index) =>
          <span key={movie.imdbID} id={index}>
          <p>{movie.Title}</p>
          <img src={movie.Poster} alt={movie.Title} />
          </span> )} 
        </div>
      </div>
    )
  }
}

export default MovieListing;