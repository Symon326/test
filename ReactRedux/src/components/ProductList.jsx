import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import './ProductList.css';

const ProductList = () => {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  return (
    <div className="row">
      {products.map(item => (
        <div key={item.id} className="col-md-4 mb-4">
          <div className="card h-100">
            <img src={item.thumbnail} alt={item.title} className="card-img-top product-image" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text price-text">Rs.{item.price}</p>
              <button className="btn btn-primary mt-auto" onClick={() => dispatch(addToCart(item))}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
