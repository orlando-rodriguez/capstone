import React from 'react';
import { Menu } from 'semantic-ui-react';

class Header extends React.Component {
  state = {}

  handleItemClick = ((e, { name }) => {
    this.setState({
      activeItem: name
    })
    this.props.clickedArticles()
  })

  render() {

    console.log(this.props);
    const { activeItem } = this.state

    return (
      <Menu unstackable>
        <Menu.Item>
          <img src='./logo.jpg' alt='logo' />
        </Menu.Item>

        <Menu.Item
          name='articles'
          active={activeItem === 'articles'}
          onClick={this.handleItemClick}
          position='right'
        >
          Articles
        </Menu.Item>

        <Menu.Item
          name='products'
          active={activeItem === 'products'}
          onClick={this.handleItemClick}
        >
          Products
        </Menu.Item>


      </Menu>
    )
  }

}

export default Header
