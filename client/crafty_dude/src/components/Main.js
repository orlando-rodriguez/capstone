import React from 'react';
import {Grid, Image, Card, Icon} from 'semantic-ui-react'
import ArticleCard from './ArticleCard'

class Main extends React.Component {
  render() {
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
            <ArticleCard />
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>

        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
            <Card color='blue'>
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
