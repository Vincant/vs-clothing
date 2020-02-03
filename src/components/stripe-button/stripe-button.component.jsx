import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-button.styles.scss';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishubleKey = 'pk_test_8uesm2s3KFr5g8SHAwc2wTXW00RRlKVLXV';

  const onToken = (token) => {
    //console.log(token);
    alert('Payment Successful');
  }
  /* in Docs
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }*/

  return(
    <StripeCheckout 
      label='Pay Now'
      name='VS-Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/Cuz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      PanelLabel='Pay Now'
      token={onToken}
      stripeKey={publishubleKey}
    />
  )
}

export default StripeCheckoutButton;