import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_ChfIJQuwdfTZERKVgKY3SD7j00eZodoeyW';
    const onToken = (token) => {
        console.log(token);
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
