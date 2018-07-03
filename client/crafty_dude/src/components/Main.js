import React from 'react';
import {Grid, Image, Card, Icon} from 'semantic-ui-react'
import {getProducts} from './moltin'
import ArticleCard from './ArticleCard'
import ProductCard from './ProductCard'


class Main extends React.Component {
  render() {




      console.log(this.props.items[0] && this.props.items[0].title)
    return (
      <Grid columns={2}>
        <Grid.Row>


          <Grid.Column>
          
          {this.props.loadArticles()}

          </Grid.Column>



        </Grid.Row>

      </Grid>

    )
  }

}



export default Main
