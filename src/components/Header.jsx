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
    setQuery(value); // show live value
    dispatch(ProductSearch(value)); // trigger Redux search
  };

  return (
    <header style={styles.header}>
      <Link style={styles.navLink} to="/">
        <div style={styles.logo}>🛍️ SmartStore</div>
      </Link>

      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search products..."
          style={styles.searchInput}
          value={query}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>
          Home
        </Link>
        <Link to="/Cart" style={styles.navLink}>
          Products
        </Link>
        <Link to="/about" style={styles.navLink}>
          About
        </Link>
      </nav>

      <div style={styles.cartIconContainer}>
        <Link to="/Cart">
          <ShoppingCartIcon style={{ fontSize: 29, color: '#fff' }} />
          <span style={styles.cartBadge}>{Cartcount}</span>
        </Link>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#1976d2',
    color: '#fff',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    flexWrap: 'wrap', // responsive
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    marginRight: 30,
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1rem',
  },
  searchContainer: {
    flexGrow: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  searchInput: {
    width: '100%',
    maxWidth: '300px',
    padding: '6px 10px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '1rem',
  },
  cartIconContainer: {
    position: 'relative',
    cursor: 'pointer',
  },
  cartBadge: {
    position: 'absolute',
    top: -2,
    right: -6,
    backgroundColor: '#f44336',
    color: '#fff',
    borderRadius: '50%',
    padding: '2px 5px',
    fontSize: '0.75rem',
    fontWeight: 'bold',
  },
};

export default Header;
