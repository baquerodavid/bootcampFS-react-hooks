import { useState, useEffect } from "react";

function useFetchCharacters(apiUrl) {
  const [character, setCharacter] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      try {

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Personaje no encontrado.')
        }

        const data = await response.json();
        setCharacter(data)
      } catch (err) {
        setCharacter('');
      }
    };

    fetchCharacters();
  }, [apiUrl])

  return {
    character,
  };
}

export default useFetchCharacters;