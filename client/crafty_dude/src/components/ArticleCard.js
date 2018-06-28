import React from 'react'
import {Card, Image, Icon} from 'semantic-ui-react'
let dataURL = 'https://craftydude.herokuapp.com/'


class ArticleCard extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    const getArticles = () => {
      fetch(dataURL)
      .then(response => response.json())
      .then(articles => {this.setState({articles})
        })
    }

  }

  render(){
    return (
      <Card href='' color='blue'>
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
    )
  }
}
export default ArticleCard
