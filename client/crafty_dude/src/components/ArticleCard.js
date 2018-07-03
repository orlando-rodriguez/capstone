import React from 'react'
import {Card, Image, Icon} from 'semantic-ui-react'
import ProductCard from './ProductCard'
import ModalButton from './Modal'

class ArticleCard extends React.Component {

  render() {



    return (

          <Card color='blue'>
            <Card.Content>
              <Card.Header textAlign={'center'}>{this.props.article[0] && this.props.article[0].title}</Card.Header>
              <Card.Meta>
                <p className='date' Align={'center'}>{this.props.article[0] && this.props.article[0].datePublished}</p>
              </Card.Meta>
              <Card.Description textAlign={'center'}>Featured Ingredient/Use</Card.Description>
            </Card.Content>
            <Image src='./blueberries.jpg' />
            <Card.Content extra>
              <a><Icon name='book' />Read Now</a>
              <ModalButton articleInfo={this.props.article} />
            </Card.Content>
          </Card>




    )
  }
}
export default ArticleCard
