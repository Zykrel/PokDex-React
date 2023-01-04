import ListaDePokemons from './components/ListaDePokemons/ListaDePokemons'
import "nes.css/css/nes.min.css";


function App() {

  return (
    <div style={{backgroundColor:'#DC143C'}}>
      <p style={{ paddingBottom: '3em' }}></p>
      <p style={{ textAlign: 'center' }}> <span style={{ fontSize: 'xxx-large' }}>PokeDex </span> <i className="nes-charmander"></i> </p>
      <ListaDePokemons />
    </div>

  )
}


export default App
