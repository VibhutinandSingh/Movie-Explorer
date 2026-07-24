import React from 'react'

function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-white">

      <h1 className="text-5xl font-bold mb-8">
        About CineVault
      </h1>

      <div className="space-y-6 text-lg text-gray-300 leading-8">

        <p>
          CineVault is a modern movie explorer built to help users discover
          trending films, search for their favourite titles, and explore
          detailed information about every movie in one place.
        </p>

        <p>
          Whether you're looking for the latest blockbuster or revisiting a
          classic, CineVault provides ratings, genres, runtime, release dates,
          overviews, and personalised movie recommendations to help you decide
          what to watch next.
        </p>

      </div>

      <div className="mt-12 border border-white/20 rounded-3xl p-6 backdrop-blur-xl bg-white/10">
        <h2 className="text-2xl font-semibold mb-4">
          Features
        </h2>

        <ul className="space-y-3 text-gray-300">
          <li>🎬 Browse trending movies</li>
          <li>🔍 Search any movie instantly</li>
          <li>⭐ View ratings, runtime, genres and release date</li>
          <li>🖼 Beautiful cinematic movie detail pages</li>
          <li>🎯 Discover similar movie recommendations</li>
        </ul>
      </div>

      <div className="mt-12 border border-white/20 rounded-3xl p-6 backdrop-blur-xl bg-white/10">
        <h2 className="text-2xl font-semibold mb-4">
          Powered By
        </h2>

        <p className="text-gray-300">
          Movie information is provided by The Movie Database (TMDB) API.
          CineVault uses TMDB to deliver accurate and up-to-date movie
          information.
        </p>
      </div>

      <div className="mt-12 border border-white/20 rounded-3xl p-6 backdrop-blur-xl bg-white/10">
        <h2 className="text-2xl font-semibold mb-4">
          About the Developer
        </h2>

        <p className="text-gray-300 leading-8">
          CineVault: <br/> Built by <span className="text-white font-semibold">Vibhutinand Singh</span> as a React project to practice building
          real-world applications using React, React Router, Context API and the
          TMDB API while focusing on creating an enjoyable user experience.
        </p>
      </div>

    </div>
  );
}

export default About;