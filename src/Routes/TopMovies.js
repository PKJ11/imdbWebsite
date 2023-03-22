import React from 'react'
import Header from '../Components/Header'
import MovieList from '../Components/MovieList'

const TopMovies = () => {
  return (
    <div>
      <Header/>
      <MovieList typeOf="top_rated" title="Top Rated"/>
    </div>
  )
}

export default TopMovies
