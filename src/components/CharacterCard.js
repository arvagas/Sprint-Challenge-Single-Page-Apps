import React from 'react'

import Card from '../styles/StylesCard'
import Image from '../styles/StylesImage'
import Name from '../styles/StylesName'
import Location from '../styles/StylesLocation'
import MinCont from '../styles/StylesMinCont'

export default function CharacterCard ( { char } ) {
  return (
    <Card>
      <Image src={char.image}></Image>
      <MinCont>
        <Name>{char.name}</Name>
        <p>{char.species} {char.status}</p>
      </MinCont>
      <MinCont>
        <Location>Location: {char.location.name}</Location>
        <Location>Origin: {char.origin.name}</Location>
      </MinCont>
    </Card>
  )
}
