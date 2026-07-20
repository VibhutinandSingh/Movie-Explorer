import React from 'react'
import MovieCard from './MovieCard'

function MovieGrid({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
        key={movie.id}
        title={movie.title}
        />
      ))}
    </div>
  )
}

export default MovieGrid
