import React from 'react'
import { Divider } from 'semantic-ui-react'

class Footer extends React.Component {
  render () {
    return (
      <div>
      <Divider className='copyright' />
      <small className="copyright">Copyright 2018</small>
      </div>

    )
  }
}



export default Footer;
