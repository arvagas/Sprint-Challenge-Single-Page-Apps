import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard ( { char } ) {
  return (
    <Card>
      <Image src={char.image} wrapped ui={false} />

      <Card.Content>
        <Card.Header>{char.name}</Card.Header>
        <Card.Meta>{char.species} {char.status}</Card.Meta>
        <Card.Description>
          Location: {char.location.name}
          <br></br>
          Origin: {char.origin.name}
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
        <a>
          <Icon name='tv' />
          {char.episode.length} Episodes
        </a>
      </Card.Content>
    </Card>
  )
}