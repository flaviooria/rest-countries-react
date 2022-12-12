import React from 'react'

export default function Card() {
  return (
    <div className="card">
        <div className="card-img">
            <img src="https://flagcdn.com/es.svg" alt="" />
        </div>
        <div className="card-content">
            <h2>España</h2>
            <p className='card-props'>Población: <span>12.2324.45</span> </p>
            <p className='card-props'>Region: <span>Europe</span> </p>
            <p className='card-props'>Capital: <span>Madrid</span> </p>
        </div>
    </div>
  )
}
