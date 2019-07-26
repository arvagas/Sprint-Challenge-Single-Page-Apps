import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default function EpisodeCard ({ epi }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{epi.name}</Card.Header>
        <Card.Description>
          {epi.episode}
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
        <p>
          <Icon name='calendar outline' />
          {epi.air_date}
        </p>
      </Card.Content>
    </Card>
  )
}
