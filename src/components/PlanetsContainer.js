import React from 'react'
import PlanetCard from "./PlanetCard"

function PlanetContainer({ planets, search }) {

  const filteredPlanets = planets.filter( planet => planet.name.toLowerCase().includes( search.toLowerCase() ) )

  const mappedPlanets = filteredPlanets.map( planet => <PlanetCard key={planet.id} planet={planet} /> )

  return (
    <div className="flex container">

      { mappedPlanets }

    </div>
  )
}

export default PlanetContainer
