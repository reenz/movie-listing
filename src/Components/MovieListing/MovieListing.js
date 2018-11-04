import React, { Component } from 'react';
import FetchMovieList from '../Api.js';
import './MovieListing.css'

class MovieListing extends Component {
  state = {
    movies: [],
    posterUrl: ""
  }

  getMovies = async (title) => {
    const movieList = await FetchMovieList(title);
    const poster = (movieList.length > 0) ? movieList[0].Poster : "";
    this.setState({movies: movieList, posterUrl: poster})
  }

  componentDidMount = async () => {
    await this.getMovies("");
  }

  handleSearch = async (event) => {
    let title = event.target.value;
    await this.getMovies(title);
  }

  showDetails = (event) => {
    let item = event.currentTarget.id
    this.setState({posterUrl:this.state.movies[item].Poster})
  }

  render() {
    const{ movies, posterUrl } = this.state;
    
    return(
      <div className="Container" >
        <div className="List">
          <div className="MovieList"> {movies.map((movie, index) =>
            <div className="Movie" key={movie.imdbID} id={index}  onClick={this.showDetails} >
            <p className="MovieTitle">{movie.Title}</p>
            <img  className="LeftHandPoster" src={movie.Poster} alt={movie.Title} />
            </div> )} 
          </div>
          <div className="SearchInput">
          <input type="text" onChange={this.handleSearch} placeholder="Enter movie title" />
          </div>
          </div>
          <div className="Poster">
           <img className="RightHandPoster"src={posterUrl} alt=""/>
        </div> 
      </div>
    )
  }
}

export default MovieListing;