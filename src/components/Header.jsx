// Header.js
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ProductSearch } from '../services/Action/ProductAction';
import { useDispatch } from 'react-redux';

function Header() {
  const Cartcount = useSelector(
    (state) => state?.reducer?.Cartdata?.length || 0
  );

  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    dispatch(ProductSearch(value));
  };

  return (
    <header className="app-header app-container">
      <Link to="/" className="logo">
        <span aria-hidden>🛍️</span>
        <span>SmartStore</span>
      </Link>

      <div className="search-wrap">
        <input
          aria-label="Search products"
          className="search-input"
          placeholder="Search products..."
          value={query}
          onChange={handleChange}
        />
      </div>

      <nav className="nav" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/Cart">Products</Link>
        <Link to="/about">About</Link>
      </nav>

      <div>
        <Link to="/Cart" aria-label={`Cart with ${Cartcount} items`}>
          <ShoppingCartIcon
            style={{ fontSize: 26, verticalAlign: 'middle', color: '#fff' }}
          />
          <span className="cart-badge">{Cartcount}</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
