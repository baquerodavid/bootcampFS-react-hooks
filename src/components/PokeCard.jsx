function PokemonCard({ pokemon }) {
  const pokemonImage =
    pokemon.character.sprites?.other?.['official-artwork']?.front_default ||
    pokemon.character.sprites?.front_default ||
    '';
  
  return (
    <>
      <div className="card">
        <h2>Pokemon</h2>
        <p className="pokemonName">{pokemon.character?.name}</p>
        <img src={pokemonImage} />
      </div>
    </>
  );
}

export default PokemonCard;