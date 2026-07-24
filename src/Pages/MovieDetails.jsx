import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RecommendedMovies from '../Components/RecommendationCard'

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [recommendedMovies, setRecommendedMovies] = useState(null)
  const [recommendationError, setRecommendationError] = useState("");
  const { id } = useParams()
  const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN

  useEffect(() => {
    fetchMovieDetails()
    fetchRecommendations()
  }, [id])

  async function fetchMovieDetails() {
    setLoading(true)
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          accept: "application/json"
        }
      })
      if (!response.ok) {
        setError("Failed to fetch movie details")
        return
      }
      const data = await response.json()
      console.log(data)
      setMovieDetails(data)
    }
    catch (error) {
      console.log(error)
      setError("Network Error")
    }
    finally {
      setLoading(false)
    }
  }

  async function fetchRecommendations() {
    try {

      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          accept: "application/json"
        }
      })
      if (!response.ok) {
        setRecommendationError("No recommendations")
        return
      }
      const data = await response.json()
      console.log(data.results)
      setRecommendedMovies(data.results)
    }
    catch (error) {
      setError(error)
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <>
      {loading && <div className='text-white text-center mt-10'>Loading...</div>}
      {error && <div className='text-red-500 text-center mt-10'>{error}</div>}
      {movieDetails && (
        <div className='flex flex-col gap-4'>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails.backdrop_path})`,
            }}
            className='text-white p-5 bg-cover starting:opacity-0 opacity-100 transition-all duration-1000 bg-rounded-lg rounded-4xl mx-2 bg-black/50 backdrop-blur-2xl relative min-h-screen bg-center'>
            <div className="absolute inset-0 bg-black/70">
              <div className="relative z-10 flex flex-col md:flex-row lg:flex-row gap-4 overflow-auto scrollbar-none h-full">
                <div className='md:w-1/3 flex flex-col items-center'>
                  {movieDetails.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} className=' rounded-4xl  p-4' />
                  ) : (
                    <div className='w-full h-96 flex justify-center items-center text-white/50 text-2xl'>No Image</div>
                  )}
                  <h1 className='text-4xl font-bold my-3 p-4 text-center border border-white/20 shadow-2xl backdrop-blur-2xl rounded-4xl'>{movieDetails.title}</h1>
                </div>
                <div className='md:w-2/3 m-4 h-full p-4 md:h-fit md:m-20 lg:h-fit lg:m-20 overflow-auto scrollbar-none  border border-white/20 shadow-2xl backdrop-blur-2xl rounded-t-2xl rounded-b-4xl'>

                  <p className='mb-3'><span className='font-bold'>Rating: ⭐</span> {movieDetails.vote_average.toFixed(1)}</p>
                  <p className='mb-3'><span className='font-bold'>Release Date:</span> {movieDetails.release_date}</p>
                  <p className='mb-3'><span className='font-bold'>Runtime:</span> {Math.floor(movieDetails.runtime / 60)}hours {movieDetails.runtime % 60}minutes</p>
                  <p className='mb-3'><span className='font-bold'>Genres:</span> {movieDetails.genres.map((genre) => genre.name).join(", ")}</p>
                  <p className='mb-3  p-2'><span className='font-bold'>Overview:</span> {movieDetails.overview}</p>
                </div>
              </div>
            </div>
          </div>

          {recommendedMovies && (
            <div >
              <p className='text-3xl text-white p-4 '>You may also like</p>
              {recommendationError ? (
                <p className='text-3xl text-white p-4 '>
                  {recommendationError}
                </p>
              ) : (
                <div className='flex flex-col p-4 m-2 border border-white/20 rounded-4xl shadow-2xl backdrop-blur-2xl bg-white/10'>
                  <div className='grid grid-cols-2 h-100 md:flex lg:flex overflow-auto scrollbar-none rounded-2xl'
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                      maskImage:
                        "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
                    }}>
                    {recommendedMovies.map((movie) => (
                      <RecommendedMovies
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        poster={movie.poster_path}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

        </div >
      )
      }
    </>
  )
}
export default MovieDetails
