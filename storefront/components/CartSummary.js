import StripeCheckout from 'react-stripe-checkout'
import {Button, Segment, Divider} from 'semantic-ui-react'

const stripeKey = 'pk_test_FaPVTbyDzwR3jERwNwduJqmu'

export default ({
  handleCheckout,
  display_price: {with_tax: {currency, amount, formatted}}
}) => (
  <React.Fragment>
    <Divider />

    <Segment clearing size='large'>
      <strong>Sub Total:</strong> {formatted}
      <StripeCheckout
        name="CraftyDude Store"
        amount={amount}
        currency={currency}
        stripeKey={stripeKey}
        shippingAddress={false}
        billingAddress={true}
        zipCode={true}
        token={handleCheckout}
        reconfigureOnUpdate={false}
        triggerEvent="onClick"
        >

        <Button color='black' floated='right'>
          Check Out
        </Button>
      </StripeCheckout>
    </Segment>

  </React.Fragment>
)
