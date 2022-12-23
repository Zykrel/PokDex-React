import {useEffect, useState} from 'react'
import Pokemon from '../pokemon/Pokemon'

const ListaDePokemons = () => {
    let [listaPokemones, setListaPokemones] = useState([])

    const [limite, setLimite] = useState(20);
    
    useEffect(() =>{
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limite}`)
        .then((res) => res.json())
        .then((data) => {
            setListaPokemones(data.results); 
        })
    }, [limite])

    const aumentarLimite = () => {
        setLimite(limite + 20)
    }

    return (
        <div className=''>  
            {
            listaPokemones.map((poke, i) => <Pokemon key={i} poke={poke}/> )
            }
            <div>
            <button onClick={aumentarLimite}> Cargar Mas Pokemon...</button>
            </div>
        </div>
    )
}

export default ListaDePokemons