import React, { Component } from 'react';
import './App.css';
import MovieListing from './Components/MovieListing/MovieListing.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        Movies
        </header>
        <MovieListing/>
      </div>
    );
  }
}

export default App;
