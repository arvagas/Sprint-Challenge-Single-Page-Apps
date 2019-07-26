import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default function LocationCard ({ loc }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{loc.name}</Card.Header>
        <Card.Description>
          {loc.type} - {loc.dimension}
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
        <a>
          <Icon name='user' />
          {loc.residents.length} Residents
        </a>
      </Card.Content>
    </Card>
  )
}
