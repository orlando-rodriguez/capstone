import Link from 'next/link'
import {Item, Loader, Button, Message} from 'semantic-ui-react'

export default ({items, removeFromCart, loading, completed}) => {
  if (loading) return <Loader active inline ='centered' />

  if (completed)
      return (
        <Message success>
          <Message.Header>Order Placed!</Message.Header>
          <p>Congratulations! Your order is on its way</p>
        </Message>
      )

  if (items.length === 0) {
    return (
      <Message warning>
        <Message.Header>Your cart is empty!</Message.Header>
        <p>Please add some items to your cart before resuming checkout.</p>
      </Message>
    )
  }
  const mapCartItemsToItems = items =>
  items.map(({id, product_id, name, quantity, meta}) => {
    const price = meta.display_price.with_tax.unit.formatted || null

    return {
      childKey: id,
      header: (
        <Link href={`/product?id=${product_id}`} passHref>
          <Item.Header as="a">{name}</Item.Header>
        </Link>
      ),
      meta: `${quantity}x ${price}`,
      extra: (
        <Button
          basic
          icon='remove'
          floated='right'
          onClick={() => removeFromCart(id)}
        />
      )
    }
  })

  return <Item.Group divided items={mapCartItemsToItems(items)} />
}
