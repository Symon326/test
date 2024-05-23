import React, { useState } from 'react';
import'./App.css'

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
      <p>{product.name}</p>
      <button onClick={handleClick}>{inCart ? 'Remove from Cart' : 'Add to Cart'}</button>
    </div>
  );
}

function CartItem({ item }) {
  return (
    <li key={item.id}>
      {item.product} ==  Rs.{item.price} (Quantity: {item.quantity})
    </li>
  );
}

function Cart({ cartItems }) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      )}
      <p>Total: Rs.{total}</p>
    </div>
  );
}

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'T-Shirt', price: 200 },
    { id: 2, name: 'Hat', price: 150 },
    { id: 3, name: 'Jeans', price: 700 },
  ]);

  const [cartItems, setCartItems] = useState([]);
  //adding items ti cart
  const addToCart = (productId) => {
    const newCartItems = [...cartItems];
    const existingItem = newCartItems.find((item) => item.id === productId);
    if (existingItem) {
      existingItem.quantity = existingItem.quantity + 1;
    } else {
      newCartItems.push({ id: productId, quantity: 1, price: products.find((p) => p.id === productId).price });
    }
    setCartItems(newCartItems);
  };
 //remove items
  const removeFromCart = (productId) => {
    const newCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(newCartItems);
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div className="container">
        <div className="products"> {/*product*/}
          {products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} />
          ))}
        </div>
        <div className="cart"> {/* Cart section */}
          <Cart cartItems={cartItems} />
        </div>
      </div>
    </div>
  );
}

export default App;
