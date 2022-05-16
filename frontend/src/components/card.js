import React from 'react'
import ImageLoad from './imageLoad'
import '../styles/card.css'

function Card({mainImg, optimisedImg, title, genres}) {
  return (
    <div className='card-container'>
        <ImageLoad 
            className={"small-poster-img"}
            main={mainImg}
            placeholder={optimisedImg}
            alt={"Poster"}
            />
        <h3>{title}</h3>
        <p>{genres}</p>
    </div>
  )
}

export default Card