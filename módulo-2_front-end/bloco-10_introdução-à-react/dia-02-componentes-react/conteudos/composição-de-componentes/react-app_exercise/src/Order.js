// arquivo Order.js
import React from 'react';
import './App.css';

class Order extends React.Component {
  render() {
    const { user, product, price, currency } = this.props;

    return (
      <div className="order">
        <p> {user} bought {product} for {price} {currency} </p>
      </div>
    );
  }
}

export default Order;