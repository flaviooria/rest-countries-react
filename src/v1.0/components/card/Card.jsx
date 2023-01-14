import React from 'react'

export default function Card({name, population,region, capital, flag}) {
  return (
    <div className="card">
        <div className="card-img">
            <img src={flag} alt="flag country" />
        </div>
        <div className="card-content">
            <h2>{name}</h2>
            <p className='card-props'>Población: <span>{population}</span> </p>
            <p className='card-props'>Region: <span>{region}</span> </p>
            <p className='card-props'>Capital: <span>{capital}</span> </p>
        </div>
    </div>
  )
}
