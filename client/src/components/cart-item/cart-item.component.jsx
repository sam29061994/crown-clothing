import React from 'react';
import '../cart-item/cart-item.styles.scss';
export const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
    <div className="cart-item">
        <img src={imageUrl} alt={name} />
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">
                {quantity} x ${price}
            </span>
        </div>
    </div>
);

export default React.memo(CartItem);
