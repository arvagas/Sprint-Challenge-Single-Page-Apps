import React, { useEffect, useState } from 'react'
import axios from 'axios'

import EpisodeCard from './EpisodeCard'

export default function EpisodeList() {
  // API website values
  const apiSite = 'https://rickandmortyapi.com/api'
  const apiCategory = 'episode'

  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    axios.get(`${apiSite}/${apiCategory}/`)
    .then(res => {
      console.log('Data retrieved: ', res)
      const apiEpi = res.data.results

      setEpisodes(apiEpi)
    })

    .catch(err => {
      console.log('API error: ', err)
    })
  }, [])

  return (
    <section className='episode-list grid-view'>
      {episodes.map(epi => (
        <EpisodeCard key={epi.id} epi={epi}/>
      ))}
    </section>
  )
}
