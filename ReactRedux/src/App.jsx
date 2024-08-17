import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">ECART</h1>
      <div className="row">
        <div className="col-md-8">
          <ProductList />
        </div>
        <div className="col-md-4">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default App;