import React from 'react'
import "./PaisCard.css"

const PaisCard = ({paisInfo}) => {
  return (
    <div className="paiscard">
      <h2>{paisInfo.name.common}</h2>
      <h3>La capital es {paisInfo.capital}</h3>
      <img src={paisInfo.flags.png} alt={paisInfo.name} />

      </div>
  )
}

export default PaisCard