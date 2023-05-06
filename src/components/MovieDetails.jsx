import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieResults from './MovieResults';
import MovieCredits from './MovieCredits';


function MovieDetails() {
    
  const [movie, setMovie] = useState(null); 
  const { id } = useParams();

  const imageUrl = 'https://image.tmdb.org/t/p/w500'; 
  const imgBackground = 'http://image.tmdb.org/t/p/original';
 
  useEffect(() => { 
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=88db658b961694029c207fb3fe6bff9f`)
      .then(response => response.json())
      .then(data => setMovie(data)); 
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='details__background' style={{backgroundImage: `url(${imgBackground}${movie.poster_path})`}}>
        <div className='container details'>
            <div className='details__box'>
              <img className='details__img' src={movie.poster_path ? `${imageUrl}${movie.poster_path}` : 'https://admin.itsnicethat.com/images/v_3z_AiDn20ajFJs-21SUknlPEA=/51850/width-1440%7Cformat-jpeg/5530f22d5c3e3c1893000f8e.png'} 
            alt={movie.title} />
            </div>
            <div className='details__content'>
              <h1 className='details__title'>{movie.title} <span className='details__date'>({movie.release_date})</span></h1>
              <p className='details__rating'><span className='details__star'>&#9733;</span>{movie.vote_average}</p>
              <p className='details__genre'>{movie.genres && movie.genres.map(genre => genre.name).join(', ')}</p>
              <h2 className='details__desc'><span className='details__span'>Overview: </span>{movie.overview}</h2>
            </div>
        </div>
        <MovieCredits/>
        <MovieResults/>
    </div>
  )
}

export default MovieDetails