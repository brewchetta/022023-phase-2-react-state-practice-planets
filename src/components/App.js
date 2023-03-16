import React, { useState } from 'react'
import StarField from '../visual-effects/StarField'
import PlanetSearch from "./PlanetSearch"
import PlanetsContainer from "./PlanetsContainer"
import ToggleLightModeButton from "./ToggleLightModeButton"
import planets from '../data.js'

function App() {
  
  // state needs to go here for the light mode / dark mode
  // that's because it's the highest component effected by the state
  const [ light, setLight ] = useState( false )
  const [ search, setSearch ] = useState('')

  function toggleLightMode() {
    setLight( !light )
  }

  const className = light === true ? 'App light-mode' : 'App dark-mode'

  return (
    <div className={ className }>

      {/* You won't have to touch StarField, it does cool visual things */}
      <StarField />

      <PlanetSearch setSearch={setSearch} search={search} />

      <ToggleLightModeButton toggleLightMode={toggleLightMode} />

      <PlanetsContainer planets={planets} search={search} />

    </div>
  );
}

export default App;
