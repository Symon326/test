import React, { createContext, useState, useEffect, useContext } from 'react';
import productData from './assets/product.json'; // Importing JSON data directly
import './App.css';

// Step 1: Create a context to share data between components
const DataContext = createContext();

// Step 2: Create a custom hook to access the context data
const useDataContext = () => useContext(DataContext);

// Step 3: Create a provider component to manage state and provide data
const DataProvider = ({ children }) => {
  // State variables for products, cart, total quantity, and total amount
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Fetch product data from JSON file on component mount
  useEffect(() => {
    // Set products state with data from JSON
    if (productData.products && Array.isArray(productData.products)) {
      setProducts(productData.products);
    } else {
      console.error('Fetched data does not contain a products array');
    }
  }, []);

  // Function to add a product to the cart
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      // If yes, increment its quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity++;
      setCart(updatedCart);
    } else {
      // If not, add it to the cart with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    // Filter out the product with the given ID
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  // Function to update total quantity and total amount
  const updateTotal = () => {
    // Calculate total quantity and amount from the cart
    const quantity = cart.reduce((total, item) => total + item.quantity, 0);
    const amount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    // Update state with the new values
    setTotalQuantity(quantity);
    setTotalAmount(amount);
  };

  // Update total when cart changes
  useEffect(() => {
    updateTotal();
  }, [cart]);

  // Step 4: Provide data to children components using context
  return (
    <DataContext.Provider value={{ products, cart, setCart, totalQuantity, totalAmount, addToCart, removeFromCart }}>
      {children}
    </DataContext.Provider>
  );
};

// Step 5: Consume and display the product data
const DataComponent = () => {
  const { products, addToCart } = useDataContext();

  return (
    <div className="product-list">
      {products.map(item => (
        <div key={item.id} className="product">
          <img src={item.thumbnail} alt={item.title} className="product-image" />
          <div className="product-info">
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>Rs.{item.price}</p>
            <button className='Addbtn' onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Step 6: Cart Component
const CartComponent = () => {
  const { cart, setCart, totalQuantity, totalAmount, removeFromCart } = useDataContext();

  // Function to handle incrementing quantity
  const handleIncrement = (productId) => {
    // Find the product in the cart
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(item => item.id === productId);
    if (existingProductIndex !== -1) {
      // If found, increment its quantity
      updatedCart[existingProductIndex].quantity++;
      setCart(updatedCart);
    }
  };

  // Function to handle decrementing quantity
  const handleDecrement = (productId) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(item => item.id === productId);
    if (existingProductIndex !== -1 && updatedCart[existingProductIndex].quantity > 1) {
      // If quantity > 1, decrement it
      updatedCart[existingProductIndex].quantity--;
      setCart(updatedCart);
    } else {
      // If quantity <= 1, remove the product from the cart
      removeFromCart(productId);
    }
  };

  // Step 7: Render cart items and controls
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <p>{item.title}</p>
              <div className="quantity-controls">
                {/* Decrement button */}
                <button className="decrement-btn" onClick={() => handleDecrement(item.id)}>-</button>
                {/* Quantity display */}
                <p>Quantity: {item.quantity}</p>
                {/* Increment button */}
                <button className="increment-btn" onClick={() => handleIncrement(item.id)}>+</button>
              </div>
              <p>Total: Rs.{item.price * item.quantity}</p>
              <button className='rembtn' onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          {/* Cart summary */}
          <div className="cart-summary">
            <p>Total Quantity: {totalQuantity}</p>
            <p>Total Amount: Rs.{totalAmount.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <>
    <h1 style={{textAlign:'center'}}>ECART</h1>
    <DataProvider>
      <div className="app">
        <DataComponent />
        <CartComponent />
      </div>
    </DataProvider>
    </>
  );
};

export default App;
