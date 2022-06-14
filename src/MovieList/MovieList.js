import React, { useEffect, useMemo, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = () => {
  const movieList = [
    {
      id: 1,
      title: 'wyonna farr',
      picture:
        'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p2.PNG?raw=true',
      rating: 3,
    },
    {
      id: 2,
      title: 'club of curves',
      picture:
        'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p3.PNG?raw=true',
      rating: 7,
    },
    {
      id: 3,
      title: 'grey s anatomy',
      picture:
        'https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p4.PNG?raw=true',
      rating: 5,
    },
  ]

  const [movies, setMovies] = useState(movieList)
  const [selectedCategory, setSelectedCategory] = useState('')

  function getSortedList() {
    if (selectedCategory === '') {
      return movies
    }
    if (selectedCategory === 'rate') {
      return movies.sort((a, b) => a.rating - b.rating)
    }
    if (selectedCategory === 'title') {
      return movies.sort((a, b) => a.title.localeCompare(b.title))
    }
  }

  useEffect(() => {
    setMovies(movieList)
  }, [])

  var sortedList = useMemo(getSortedList, [selectedCategory, movies])

  const filterWithRate = () => {
    setSelectedCategory('rate')
  }

  const filterWithTitle = () => {
    setSelectedCategory('title')
  }

  return (
    <div>
      <div className="location" id="home">
        <h1 id="home">Popular on Netflix</h1>
        <nav className="main-nav" style={{ paddingBottom: '30px' }}>
          <h1>Filter with : </h1>
          <a onClick={filterWithTitle}>Title</a>
          <a onClick={filterWithRate}>Rate</a>
        </nav>
        <div className="box">
          {sortedList.map((item) => (
            <MovieCard
              key={item.id}
              picture={item?.picture}
              title={item?.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
