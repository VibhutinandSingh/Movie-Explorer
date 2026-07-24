import React from 'react'

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/20 bg-white/10 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          <div>
            <h1 className="text-3xl font-bold text-white">
              Cine<span className="text-red-700">Vault.</span>
            </h1>

            <p className="text-gray-400 mt-2">
              Discover • Explore • Watch
            </p>
          </div>

          <div className="flex gap-8 text-gray-300">

            <a href="/">Home</a>

            <a href="/about">About</a>

            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noreferrer"
            >
              TMDB
            </a>

          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">

          <p>
            © {new Date().getFullYear()} CineVault. Built with React.
          </p>

          <p className="mt-2">
            This product uses the TMDB API but is not endorsed or certified by TMDB.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;


