import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

class ModalButton extends React.Component {
  render(){
    console.log(this.props.articleInfo[0] && this.props.articleInfo[0].title);
    return (
      <Modal trigger={<Button>Read More</Button>}>
        <Modal.Header>{this.props.articleInfo[0] && this.props.articleInfo[0].title}</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='./blueberries.jpg' />
          <Modal.Description>
            <Header>Modal Header</Header>
            <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>

          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button primary>
            Proceed <Icon name='right chevron' />
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}



export default ModalButton
