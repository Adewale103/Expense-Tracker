import React from 'react'
import "../components/Movie.css"

function Movie(props) {
  return (
    <div className='movie'>
        <h2 className='movie-name'>{props.name}</h2>
        <img src={props.image} alt="" />
        <h2 className='year'>{props.year}</h2>
        <h2 className='box-office'>{props.box_office}</h2>


    </div>
  )
}

export default Movie