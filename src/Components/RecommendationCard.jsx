import React from 'react'
import { Link } from 'react-router-dom'

function RecommendationCard({ title, poster, id }) {

  return (
    <div className='shrink-0 border-white/20 bg-white/20 backdrop-blur-2xl border shadow-2xl p-3 m-2 text-white text-center rounded-2xl'>
      <Link to={`/movie/${id}`}>
        <div className='overflow-hidden bg-gray-800 rounded-t-2xl rounded-b '>
          {poster ? <img
            className=' hover:scale-110 transition-all duration-200 cursor-pointer'
            src={`https://image.tmdb.org/t/p/w200${poster}`} alt={title} /> : <div className='object-cover flex justify-center items-center text-white/50 text-2xl'> No Image</div>}
        </div>
      </Link>
      <Link to={`/movie/${id}`}>
        <h2 className='mt-3'>
          {title}
        </h2>
      </Link>
    </div>
  )
}

export default RecommendationCard
