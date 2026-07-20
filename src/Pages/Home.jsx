import React, { useEffect, useState } from 'react'
import MovieGrid from '../Components/MovieGrid'

function Home() {
  const [movies, setMovies] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchTrendingMovies()
  }, [])

  const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN
  async function fetchTrendingMovies() {
    setLoading(true)
    setError("")
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/popular", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          accept: "application/json"
        }
      })
      if (!response.ok) {
        setError("Failed to fetch moviesx")
        return
      }
      const data = await response.json()
      console.log(data.results)
      setMovies(data.results)
    }
    catch {
      setError("Network Error")
      setMovies(null)
    }
    finally {
      setLoading(false)
    }
  }
  return (
    <>
      {movies && (
        <MovieGrid
          movies={movies}
        />
      )}
    </>
  )
}

export default Home
