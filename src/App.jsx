import './App.css';
import PokemonCard from './components/PokemonCard';
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
