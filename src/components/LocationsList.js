import React, { useEffect, useState } from 'react';
import axios from 'axios'

import LocationCard from './LocationCard'

export default function LocationsList() {
    // API website values
    const apiSite = 'https://rickandmortyapi.com/api'
    const apiCategory = 'location'

    const [locations, setLocations] = useState([])

    useEffect(() => {
        axios.get(`${apiSite}/${apiCategory}/`)
        .then(res => {
            console.log('Data retrieved: ', res)
            const apiLoc = res.data.results

            setLocations(apiLoc)
        })

        .catch(err => {
            console.log('API error: ', err)
        })
    }, [])

    return (
        <section className='location-list grid-view'>
            {locations.map(loc => (
                <LocationCard key={loc.id} loc={loc}/>
            ))}
        </section>
    )
}
