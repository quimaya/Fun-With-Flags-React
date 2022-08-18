import React from 'react'
import "./RegionCard.css"

const RegionCard = ({regionInfo}) => {
  return (
    <div className="regioncard">
      <h2>{regionInfo.subregion}</h2>
      <h3>Pertenece al continente de {regionInfo.region}</h3>

      </div>
  )
}

export default RegionCard