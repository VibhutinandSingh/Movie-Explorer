import React, { useContext, useEffect, useState } from 'react'
import MovieGrid from '../Components/MovieGrid'
import { SearchContext } from '../context/SearchContext'

function Home() {
  const [movies, setMovies] = useState(null)

  const [error, setError] = useState("")

  const {
    query,
    setQuery,
    loading,
    setLoading,
    searchRequested,
    setSearchRequested,
  } = useContext(SearchContext);

  useEffect(() => {
    fetchTrendingMovies()
  }, [])

  useEffect(() => {
    setError("")
  }, [query])

  useEffect(() => {
    if (!searchRequested) return;

    handleSearch();
  }, [searchRequested])

  const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN

  async function handleSearch() {
    setLoading(true)
    setError("")
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query.trim())}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          accept: "application/json"
        }
      })

      if (!response.ok) {
        setError("Failed to fetch movies")
        return
      }

      const data = await response.json()

      if (data.results.length === 0) {
        setError("Couldn't find the movie")
        return
      }
      setMovies(data.results)
    }
    catch (error) {
      console.log(error)
      setError("Network Error")
    }
    finally {
      setLoading(false)
      setSearchRequested(false)
    }
  }


  async function fetchTrendingMovies() {
    setLoading(true)
    setError("")
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/popular`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          accept: "application/json"
        }
      })
      if (!response.ok) {
        setError("Failed to fetch movies")
        return
      }
      const data = await response.json()
      setMovies(data.results)
    }
    catch (error) {
      console.log(error)
      setError("Network Error")
      setMovies(null)
    }
    finally {
      setLoading(false)
    }
  }
  return (
    <div className=''>
      {error && (
        <p className="text-red-400 text-center mt-4">
          {error}
        </p>
      )}
      {movies && (
        <MovieGrid
          movies={movies}
        />
      )}
    </div>
  )
}

export default Home
