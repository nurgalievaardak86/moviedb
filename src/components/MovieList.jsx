import React, { useState, useEffect } from 'react';
import MovieDetails from './MovieDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState('');

  const navigator = useNavigate()
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=88db658b961694029c207fb3fe6bff9f')
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, []);
  
  const imageUrl = 'https://image.tmdb.org/t/p/w500';

   const handleSearch = () => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=88db658b961694029c207fb3fe6bff9f&query=${searchText}`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.log(error));
  };

  const handleInputChange = event => {
    setSearchText(event.target.value);
  };

  return (
    <div className='container'>
      <h1 className='movies__title'>Movie DB</h1>
      <input 
        className='search__input'
        type="text"
        placeholder="Search movie name"
        value={searchText}
        onChange={handleInputChange }
      />
      <button onClick={handleSearch} className='search__btn'>Search</button>
      <ul className='movies'>
        {movies.map(movie => (
          <li 
          key={movie.id}
          >
            <img 
            className='movies__img' 
            onClick={() => navigator(`/movieDetails/${movie.id}`)}
            src={movie.poster_path ? `${imageUrl}${movie.poster_path}` : 'https://admin.itsnicethat.com/images/v_3z_AiDn20ajFJs-21SUknlPEA=/51850/width-1440%7Cformat-jpeg/5530f22d5c3e3c1893000f8e.png'} 
            alt={movie.title} />
            <h2 className='movies__name'>{movie.title}</h2>
            <p className='movies__rating'>Rating: {movie.vote_average}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;