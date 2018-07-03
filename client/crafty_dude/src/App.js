import React, { Component } from 'react';
import { render } from 'react-dom'
import './App.css';
import {Card, Image, Icon} from 'semantic-ui-react'
import ModalButton from './components/Modal'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      articles: false
    };
  }

  componentDidMount() {
  return fetch("https://craftydude.herokuapp.com/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.articles
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }

  clickedArticles = () => {
    this.setState({
      articles: !this.state.articles
    })
  }


  loadArticles = () => {

    return this.state.articles && this.state.items.map((article, index) => {

      return (
        <Card color='blue'>
          <Card.Content>
            <Card.Header textAlign={'center'}>{article.title}</Card.Header>
            <Card.Meta>
              <p className='date' Align={'center'}>{article.datePublished}</p>
            </Card.Meta>
            <Card.Description textAlign={'center'}>Featured Ingredient/Use</Card.Description>
          </Card.Content>
          <Image src='./blueberries.jpg' />
          <Card.Content extra>
            <a><Icon name='book' />Read Now</a>

          </Card.Content>
        </Card>
      )
    } )
  }


  render() {
      console.log(this.state);
    return (

      <div className="App">
        <Header clickedArticles={this.clickedArticles}  />
        <Main items={this.state.items} loadArticles={this.loadArticles} />
        <Footer />

      </div>
    );
  }
}

export default App;
