import React from 'react'
import Header from '../Components/Header'
import MovieList from '../Components/MovieList'

const Upcoming = () => {
  return (
    <div>
      <Header/>
      <MovieList typeOf="upcoming" title="UpComings "/>
    </div>
  )
}

export default Upcoming
