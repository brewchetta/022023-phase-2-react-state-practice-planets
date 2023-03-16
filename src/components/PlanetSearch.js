import React from 'react'

function PlanetSearch({ setSearch, search }) {

  function handleChange(e) {
    setSearch( e.target.value )
  }

  function handleClear() {
    setSearch("")
  }

  return (
    <>
      <input type="text" onChange={handleChange} placeholder='search' />
      <button onClick={handleClear}>Clear</button>
    </>
  )
}

export default PlanetSearch
