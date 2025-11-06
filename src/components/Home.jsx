import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToCart, RemoveToCart } from '../services/Action/Actions';
import { ProductActionData } from '../services/Action/ProductAction';

function Home() {
  const dispatch = useDispatch();
  let Product = useSelector((state) => state.reducer.ProductReducerData || []);

  useEffect(() => {
    dispatch(ProductActionData());
  }, []);

  return (
    <main className="app-container">
      <section className="product-grid">
        {Product &&
          Product.map((item, index) => (
            <article className="product-card" key={index}>
              {/* Use thumbnail if available, otherwise first image in images array, otherwise placeholder */}
              <img
                className="product-image"
                src={
                  item?.thumbnail ||
                  (Array.isArray(item?.images) ? item.images[0] : '') ||
                  '/placeholder.png'
                }
                alt={item?.brand || 'product'}
                onError={(e) => {
                  // fallback in case image fails to load
                  e.currentTarget.src = '/placeholder.png';
                }}
              />
              <div className="product-info">
                <h3 className="product-title">{item?.brand}</h3>
                <p className="product-desc">{item?.description}</p>
                <p className="muted">Category: {item?.category}</p>

                <div className="price-row">
                  <div>
                    <div className="price">₹ {item?.price}</div>
                    <div className="tag">{item?.availabilityStatus}</div>
                  </div>
                </div>

                <div className="btn-row">
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    Add to cart 🛒
                  </button>
                  <button
                    className="btn btn-ghost"
                    onClick={() => dispatch(RemoveToCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </article>
          ))}
      </section>
    </main>
  );
}

export default Home;
