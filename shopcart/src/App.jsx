import React, { useState } from 'react';
import './App.css';

function Product({ product, addToCart, removeFromCart }) {
  const [inCart, setInCart] = useState(false);

  const handleClick = () => {
    if (inCart) {
      removeFromCart(product.id);
      setInCart(false);
    } else {
      addToCart(product.id);
      setInCart(true);
    }
  };

  return (
    <div className="product">
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.name}</p>
      <p>Rs.{product.price}</p>
      <button onClick={handleClick}>{inCart ? 'Remove from Cart' : 'Add to Cart'}</button>
    </div>
  );
}

function Cart({ cartItems }) {
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total: Rs.{total}</p>
    </div>
  );
}

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'T-Shirt', price: 200, imageUrl: 'src/assets/images/t.avif' },
    { id: 2, name: 'Hat', price: 150, imageUrl: 'src/assets/images/h.avif' },
    { id: 3, name: 'Jeans', price: 700, imageUrl: 'src/assets/images/j.jpg' },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    const newCartItems = [...cartItems];
    const existingItem = newCartItems.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      newCartItems.push({ id: productId, price: product.price, quantity: 1 });
    }

    setCartItems(newCartItems);
  };

  const removeFromCart = (productId) => {
    let newCartItems = [...cartItems];
    const existingItem = newCartItems.find((item) => item.id === productId);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        newCartItems = newCartItems.filter((item) => item.id !== productId);
      }
    }

    setCartItems(newCartItems);
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div className="container">
        <div className="products">
          {products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} />
          ))}
        </div>
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
