import React from 'react';
import Subtotal from './Subtotal';
import './Checkout.css'

export const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <h2 className="checkout__title">Your shopping basket is empty</h2>
                <p>You have no items in your basket.Buy one</p>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;