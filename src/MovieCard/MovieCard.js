import React from 'react'

const MovieCard = (props) => {
  return (
    <div>
      <a href>
        <img
          src={props.picture}
          alt=""
        />
      </a>
        {props.title}
        
    </div>
  )
}

export default MovieCard
