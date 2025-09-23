import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addToCart, RemoveToCart } from '../services/Action/Actions';
import { ProductActionData } from '../services/Action/ProductAction';

function Home() {
  const dispatch = useDispatch();
  let Product = useSelector((state) => state.reducer.ProductReducerData || []);
  console.log('Product Data', Product);

  useEffect(() => {
    dispatch(ProductActionData());
  }, []);

  return (
    <div style={styles.container}>
      {Product &&
        Product.map((item, index) => {
          return (
            <div style={styles.card} key={index}>
              <img style={styles.image} src={item?.images} alt="" />
              <div style={styles.info}>
                <h2 style={styles.title}>{item?.brand}</h2>

                <p style={styles.description}>{item?.description}</p>
                <p style={styles.description}> category: {item?.category}</p>
                <div style={styles.priceTag}>
                  <span style={styles.price}> ₹ {item?.price}</span>
                  <span style={styles.tag}>{item?.availabilityStatus}</span>
                </div>
                <div
                  style={{ display: 'flex', gap: 2, flexDirection: 'column' }}
                >
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    style={styles.button}
                  >
                    Add to cart 🛒
                  </button>
                  <button
                    onClick={() => dispatch(RemoveToCart(item.id))}
                    style={styles.button}
                  >
                    Remove to cart 🛒
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '30px',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '40px',
  },
  card: {
    width: '300px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '250px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  info: {
    textAlign: 'left',
    flex: 1,
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '10px',
    color: '#222',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '15px',
    color: '#666',
  },
  priceTag: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  price: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: '#e91e63',
  },
  tag: {
    fontSize: '0.9rem',
    color: '#388e3c',
    marginTop: '5px',
  },
  button: {
    padding: '12px 24px',
    fontSize: '1rem',
    backgroundColor: '#1976d2',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default Home;
