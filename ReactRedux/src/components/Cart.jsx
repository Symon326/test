import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity } from '../redux/cartSlice';
import './Cart.css';

const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-header">
        <h2>Cart</h2>
      </div>
      <div className="card-body">
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <div>
            {cart.map(item => (
              <div key={item.id} className="cart-item mb-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h5>{item.title}</h5>
                    <div className="d-flex align-items-center">
                      <button className="btn btn-outline-secondary btn-sm mr-2" onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                      <p className="m-0">Quantity: {item.quantity}</p>
                      <button className="btn btn-outline-secondary btn-sm ml-2" onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                    </div>
                    <p className="mt-2">Total: Rs.{item.price * item.quantity}</p>
                  </div>
                  <button className="btn btn-danger btn-sm" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                </div>
              </div>
            ))}
            <div className="cart-summary mt-4">
              <h5>Total Quantity: {totalQuantity}</h5>
              <h5>Total Amount: Rs.{totalAmount.toFixed(2)}</h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
