import './App.css';
import {  Routes, Route } from "react-router-dom"

import Home from './Routes/Home';

import TopMovies from './Routes/TopMovies';
import Upcoming from './Routes/Upcoming';
import Popular from './Routes/Popular';
import Movie from './Routes/Movie' ; 

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/TopMovies" element={<TopMovies/>}/>
      <Route path="/Upcoming" element={<Upcoming/>}/>
      <Route path="/Popular" element={<Popular/>}/>
      <Route path="movie/:id" element={<Movie/>}></Route>
    </Routes>
  );
}

export default App;

