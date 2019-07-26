import React, { useEffect, useState } from 'react'
import axios from 'axios'

import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // API website values
  const apiSite = 'https://rickandmortyapi.com/api'
  const apiCategory = 'character'

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios.get(`${apiSite}/${apiCategory}/`)
    .then(res => {
      console.log('Data retrieved: ', res)
      const apiChars = res.data.results

      setCharacters(apiChars)
    })

    .catch(err => {
      console.log('API error: ', err)
    })
  }, [])

  return (
    <section className='character-list grid-view'>
      {characters.map(char => (
        <CharacterCard key={char.id} char={char}/>
      ))}
    </section>
  )
}
