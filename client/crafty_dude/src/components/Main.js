import React from 'react';
import {Grid, Image, Card, Icon} from 'semantic-ui-react'


class Main extends React.Component {
  render() {
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column width={8}>
            <Card>
              <Card.Content>
                <Card.Header textAlign={'center'}>Article Title</Card.Header>
                <Card.Meta>
                  <p className='date' Align={'center'}>June 26, 2018</p>
                </Card.Meta>
                <Card.Description textAlign={'center'}>Article Tagline</Card.Description>
              </Card.Content>
              <Image src='./white.jpg' />
              <Card.Content extra>
                <a><Icon name='user' />Read More</a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>

        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column width={8}>
            <Card>
              <Card.Content>
                <Card.Header textAlign={'center'}>Product Name</Card.Header>
                <Card.Meta>
                  <p className='date' Align={'center'}>$5</p>
                </Card.Meta>
                <Card.Description textAlign={'center'}>Featured Ingredient/Use</Card.Description>
              </Card.Content>
              <Image src='./blueberries.jpg' />
              <Card.Content extra>
                <a><Icon name='user' />Learn More</a>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid>

    )
  }

}

export default Main
