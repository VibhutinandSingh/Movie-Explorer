import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import { SearchContext } from '../context/SearchContext';

function MovieGrid({ movies }) {
  const{
    loading,
  }=useContext(SearchContext);
  return (
    <div className='grid grid-cols-2 w-fit starting:opacity-0 opacity-100 duration-500 items-center justify-center m-auto md:grid-cols-3 lg:grid-cols-5 gap-2 mx-2 md:mx-10 lg:mx-40'>
      {movies.map((movie) => (
        <MovieCard
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster={movie.poster_path}
        />
      ))}
    </div>
  )
}

export default MovieGrid
