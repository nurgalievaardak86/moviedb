import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieResults() {

  const [movie, setMovie] = useState(); 
  const { id } = useParams();
 
  useEffect(() => { 
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=88db658b961694029c207fb3fe6bff9f&language=en-US`)
      .then(response => response.json())
      .then(data => setMovie(data)); 
  },[id]);

  if (!movie) {
    return <div>Loading...</div>;
  }


  if (!movie.results || movie.results.length === 0) {
    return <div className='container'>
        <div className='results'>
          <h1 className='results__title'>No reviews available</h1>
        </div>
      </div>
  }
  
  const review = movie.results[0];


  return (
    <div className='review'>
      <div className='container'>
        <div className='review__content'>
          <p className='review__title'><span className='review__span'>Author: </span>{review.author}</p>
          <p className='review__desc'><span className='review__span'>A review by: </span>{review.content}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieResults