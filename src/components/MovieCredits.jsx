import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieCredits() {

const [cast, setCast] = useState([]);
const { id } = useParams();
const imageUrl = 'https://image.tmdb.org/t/p/w500'; 

useEffect(() => { 
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=88db658b961694029c207fb3fe6bff9f&language=en-US`)
      .then(response => response.json())
      .then(data => setCast(data.cast)); 
  },[id]);

  if (!cast) {
    return <div>Loading...</div>;
  }

  return (
    <div className='credits'>
        {cast.map(actor => (
        <div className='credits__box' key={actor.id}>
            <div>
                <img className='credits__img' src={actor.profile_path ? `${imageUrl}${actor.profile_path}` : 'https://admin.itsnicethat.com/images/v_3z_AiDn20ajFJs-21SUknlPEA=/51850/width-1440%7Cformat-jpeg/5530f22d5c3e3c1893000f8e.png'} 
                    alt={actor.title} />
                <p className='credits__title'>{actor.name}</p>
                <p className='credits__character'>{actor.character}</p>
            </div>
            
        </div>
      ))}
    </div>
  )
}

export default MovieCredits