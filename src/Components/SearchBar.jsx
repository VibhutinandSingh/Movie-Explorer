import React, { useContext } from 'react'
import { SearchContext } from '../context/SearchContext';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const {
    query,
    setQuery,
    loading,
    searchRequested,
    setSearchRequested,
  } = useContext(SearchContext);
  const navigate = useNavigate()

  return (
    <>
      <form className='flex flex-col md:flex-row lg:flex-row'
        onSubmit={(e) => {
          e.preventDefault();
          if (query.trim() === "") return;
          setSearchRequested(true);
          navigate("/")
        }}>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          aria-label="Search movies"
          placeholder='What do you want to watch?'
          className='text-white bg-white/20 backdrop-blur-2xl border border-white/20 p-4 rounded-2xl md:rounded-r-none lg:rounded-r-none outline-none flex gap-4 justify-center items-center md:rounded-l-2xl lg:rounded-l-2xl w-76 text-center md:w-96 lg:w-96 md:text-start lg:text-start'
        />

          <button className='text-white mt-2 w-50 md:mt-0 lg:mt-0 m-auto border outline-none border-white/20 px-6 py-3 md:p-4 lg:p-4 rounded-2xl md:rounded-l-none lg:rounded-l-none flex gap-4 justify-center items-center md:rounded-r-2xl lg:rounded-r-2xl bg-white/20 hover:bg-white/30 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
            disabled={loading || query.trim() === ""}
            title={query.trim() === "" ? "Enter movie name first" : "Search"}
            type="submit"
          >
            {loading ? <div className='border-2 border-gray-600 border-t-blue-700 p-2 rounded-full animate-spin'>
            </div> : ""
            }
            <h1>
              {loading ? <p>Searching</p> : <p>🔍 Search</p>
              }
            </h1>
          </button>   
      </form>
    </>
  )
}

export default SearchBar
