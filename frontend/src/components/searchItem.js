import React from 'react'
import { Link } from 'react-router-dom'

function SearchItem({movieIndex, poster, name, genre}) {
  return (
    <Link to={`/movie/${movieIndex}`}>
        <div className='each-search-item'>
            <img src={poster} />
            <div className='search-movie-details'>
                <h3>{name}</h3>
                <h5>{genre}</h5>
            </div>
        </div>
    </Link>
  )
}

export default SearchItem