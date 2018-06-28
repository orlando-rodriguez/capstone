import {Header, Divider, Table} from 'semantic-ui-react'

export default ({
  description,
  ingredients
}) => (
  <React.Fragment>
    <Header as='h3'>About this product</Header>
    <p>{description}</p>

    <Divider />

    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan='2'>Attributes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Ingredients</Table.Cell>
          <Table.Cell>{ingredients}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </React.Fragment>
)
