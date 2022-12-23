import { useEffect, useState } from 'react'

const Pokemon = ({ poke }) => {

  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    if (poke.url) {
      fetch(poke.url)
        .then((res) => res.json())
        .then((data) => {
          setPokemon(data)
        })
    }
  }, [])

  return (
    <div>
      {
        (pokemon != undefined) ?
          <div>
            <p>{pokemon.id}</p>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.front_default} width="150" />
          </div>
          : "Vacio"}
    </div>


  )
}

export default Pokemon