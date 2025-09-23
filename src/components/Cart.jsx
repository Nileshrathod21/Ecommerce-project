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
    <>
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" gutterBottom>
          Your Cart
        </Typography>

        {CartBaseData.map((item) => (
          <Card
            key={item.id}
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
              image={item?.images}
              alt={'Product Image'}
              sx={{ width: 100, height: 100, objectFit: 'contain', p: 1 }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h6">{item?.brand}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item?.returnPolicy}
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                Total: ₹ {item?.price}
              </Typography>
            </CardContent>
            <IconButton>
              <DeleteIcon
                color="error"
                onClick={() => dispatch(RemoveToCart(item.id))}
              />
            </IconButton>
          </Card>
        ))}

        <Box textAlign="right" mt={2}>
          <Typography variant="h6" gutterBottom>
            Grand Total: {Amount}
          </Typography>
          <Button variant="contained" color="primary">
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Cartdata;
