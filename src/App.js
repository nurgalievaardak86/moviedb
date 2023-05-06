import './index.css';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import MovieCredits from './components/MovieCredits';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList/>}/>
        <Route path='/movieDetails/:id' element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
