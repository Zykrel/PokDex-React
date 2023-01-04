import { useEffect, useState } from 'react'
import Pokemon from '../pokemon/Pokemon'

const ListaDePokemons = () => {
    let [listaPokemones, setListaPokemones] = useState([])
    const [limite, setLimite] = useState(51);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limite}`)
            .then((res) => res.json())
            .then((data) => {
                setListaPokemones(data.results);
            })
    }, [limite])

    const aumentarLimite = () => {
        setLimite(limite + 50)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexFlow: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {
                    listaPokemones.length > 0
                        ? listaPokemones.map((poke, i) => <Pokemon key={i} poke={poke} />)
                        : 'no hay Pokemones'}
            </div>
            <button style={{ margin: '2em 20em' }} type="button" className="nes-btn is-error" onClick={aumentarLimite}> Cargar Mas Pokemon...</button>
        </div>
    )
}

export default ListaDePokemons