import './App.css';
import PokemonCard from './components/PokeCard';
import RickCard from './components/RickCard';
import useFetchCharacters from './hooks/useFetchCharacters';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';
  
  const pokemon = useFetchCharacters(urlPokemon);
  const rick = useFetchCharacters(urlRick);
  
  return (
    <>
      <PokemonCard pokemon={pokemon} />
      <RickCard rick={rick} />
    </>
  );
}

export default App;

// 👇 CODIGO DE LA LIVE REVIEW EMPIEZA DESDE AQUÍ 👇
/* 
import './App.css';
import useFetchCharacters from './hooks/useFetchCharacters.js'
import Character from './components/Character'

function App() {
  const urlPokemon = `https://pokeapi.co/api/v2/pokemon/12`;
  const urlRick = 'https://rickandmortyapi.com/api/character/12';

  const {data: pokemon, loading: loadingPokemon, error: errorPokemon} = useFetchCharacters(urlPokemon)
  const {data: rick, loading: loadingRick, error: errorRick} = useFetchCharacters(urlRick)
  
  return (
    <>
      <Character character={pokemon} loading={loadingPokemon} error={errorPokemon} name={pokemon?.name} img={pokemon?.sprites?.front_default}/>
      <Character character={rick} loading={loadingRick} error={errorRick} name={rick?.name} img={rick?.image} />
    </>
  );
}

export default App; 
*/
