
import './App.css';
import React, {useState, useEffect} from "react";
import search from "./search.svg";
import MovieCard from './MovieCard';

const API_URL = "http://www.omdbapi.com?apikey=2c41f89d";

const movie1 = {
 "title": "Amazing Spiderman Syndrome",
 "year": "2012",
 "imdbID": "tt2586634",
 "Type": "movie",
 "Poster": "N/A"
}


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);


  useEffect(() => {

    searchMovies('Wonder Woman');
  },[]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={search}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
    );
  };

export default App;

//2c41f89d
