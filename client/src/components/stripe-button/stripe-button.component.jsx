import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_ChfIJQuwdfTZERKVgKY3SD7j00eZodoeyW';
    const onToken = (token) => {
        axios
            .post('/payment', {
                amount: priceForStripe,
                token,
            })
            .then((res) => {
                alert('Payment was successful');
            })
            .catch((err) => {
                console.log(err);
                alert('There was an issue with your payment.');
            });
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLable="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};
export default StripeCheckoutButton;
