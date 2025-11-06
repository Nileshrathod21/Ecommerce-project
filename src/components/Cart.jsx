import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { RemoveToCart } from '../services/Action/Actions';
import { useDispatch } from 'react-redux';

function Cartdata() {
  const dispatch = useDispatch();

  const CartBaseData = useSelector((state) => state?.reducer?.Cartdata || []);
  console.log('Cart-Data', CartBaseData);
  // ✅ Clean the price string and calculate total

  let Amount = CartBaseData.reduce((prev, currn) => {
    return prev + currn.price || 0; // Ensure we handle cases where price might be undefined
  }, 0);

  //   const total = CartData.reduce(
  //     (acc, item) => acc + item.price * item.quantity,
  //     0
  //   );
  return (
    <div className="app-container">
      <Box sx={{ padding: 2 }} className="cart-list">
        <Typography variant="h4" gutterBottom>
          Your Cart
        </Typography>

        {CartBaseData.map((item) => (
          <Card
            key={item.id}
            className="cart-item"
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
              boxShadow: 2,
              borderRadius: 2,
            }}
          >
            <CardMedia
              component="img"
              className="cart-thumb"
              image={
                item?.thumbnail ||
                (Array.isArray(item?.images) ? item.images[0] : '') ||
                '/placeholder.png'
              }
              alt={'Product Image'}
              sx={{ width: 100, height: 100, objectFit: 'contain', p: 1 }}
              onError={(e) => {
                e.currentTarget.src = '/placeholder.png';
              }}
            />
            <CardContent sx={{ flex: 1 }} className="cart-details">
              <Typography variant="h6">{item?.brand}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item?.returnPolicy}
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                Total: ₹ {item?.price}
              </Typography>
            </CardContent>
            <IconButton
              aria-label={`Remove ${item?.brand}`}
              onClick={() => dispatch(RemoveToCart(item.id))}
            >
              <DeleteIcon color="error" />
            </IconButton>
          </Card>
        ))}

        <Box textAlign="right" mt={2}>
          <Typography variant="h6" gutterBottom>
            Grand Total: {Amount}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className="btn btn-primary"
          >
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default Cartdata;
