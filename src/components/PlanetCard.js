import React, { useState } from 'react'
import PlanetFacts from "./PlanetFacts"

function PlanetCard({planet}) {

  const [details, setDetails] = useState( true )

  function handleClick() {
    setDetails( !details )
  }

  const renderDetails = details ? <img className={ planet.is_planet ? null : 'not-planet' } src={planet.image} alt={planet.name} /> : <PlanetFacts planet={planet} />

  return (
    <div className="card" onClick={handleClick}>
      <h2>{planet.name}</h2>

      { renderDetails }

    </div>
  )
}

export default PlanetCard
