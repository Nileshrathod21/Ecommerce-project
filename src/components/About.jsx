import React from 'react';

const About = () => {
  return (
    <main className="app-container" style={{ paddingTop: 8 }}>
      <section className="product-card" style={{ padding: 28 }}>
        <header style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ fontSize: 36 }}>🛍️</div>
          <div>
            <h1 style={{ margin: 0 }}>About SmartStore</h1>
            <p className="muted" style={{ margin: 0 }}>
              A simple demo ecommerce app built with React, Redux and Saga.
            </p>
          </div>
        </header>

        <hr
          style={{
            margin: '18px 0',
            border: 'none',
            borderTop: '1px solid #eef2f7',
          }}
        />

        <div style={{ display: 'grid', gap: 12 }}>
          <p>
            SmartStore is a learning project demonstrating fetching products
            from an API, searching, and a small cart using Redux + redux-saga.
            The UI contains responsive product cards and a clean header.
          </p>

          <h3>Key features</h3>
          <ul>
            <li>Product listing fetched from dummyjson.com</li>
            <li>Search powered by the API</li>
            <li>Cart built with Redux, removal and totals</li>
            <li>Responsive, modern styling</li>
          </ul>

          <h3>Contact</h3>
          <p className="muted">
            For questions or contributions, open an issue on the repository or
            contact the author.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
