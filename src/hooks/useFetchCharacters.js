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


// 👇 CODIGO DE LA LIVE REVIEW EMPIEZA DESDE AQUÍ 👇
/* 
import { useEffect, useState } from 'react'

const useFetchCharacters = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setError(null)
    setData(null)

    const fetchCharacter = async () => {
      try {
        const response = await fetch(url)
        if(!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }
        const result = await response.json()
        setData(result)
      } catch (err) {
        console.error("Fetch Error:", err)
        setError(err.message || "Ha ocurrido algo inesperado")
      } finally {
        setLoading(false)
      }
    }

    if(url) {
      fetchCharacter()
    }
  }, [url])

  return { data, error, loading }
}

export default useFetchCharacters 
*/