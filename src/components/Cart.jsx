// File: src/pages/Cart.jsx

import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
  Snackbar,
  Alert
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('myCart')) || [];
    setCartItems(cart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('myCart', JSON.stringify(updatedCart));
    setShowAlert(true);
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Box sx={{ py: 8, minHeight: '100vh', bgcolor: 'grey.100' }}>
      <Container>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Your Shopping Cart
        </Typography>

        {cartItems.length === 0 ? (
          <Typography align="center" mt={4} color="text.secondary">
            🛒 Your cart is empty!
          </Typography>
        ) : (
          <>
            <Grid container spacing={3} mt={2}>
              {cartItems.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Card
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 3,
                      boxShadow: 3,
                      height: '100%',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.image}
                      alt={item.name}
                      sx={{ height: 200, objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography variant="h6">{item.name}</Typography>
                      <Typography>Price: ₹{item.price}</Typography>
                      <Typography>Quantity: {item.quantity}</Typography>
                      <Typography fontWeight="bold">
                        Subtotal: ₹{item.price * item.quantity}
                      </Typography>
                    </CardContent>
                    <Box textAlign="center" pb={2}>
                      <IconButton color="error" onClick={() => removeFromCart(item.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Box textAlign="center" mt={5}>
              <Typography variant="h6">Total: ₹{getTotal()}</Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Proceed to Checkout
              </Button>
            </Box>
          </>
        )}

        <Box textAlign="center" mt={5}>
          <Button component={Link} to="/" variant="outlined">
            ⬅ Back to Home
          </Button>
        </Box>

        <Snackbar
          open={showAlert}
          autoHideDuration={1500}
          onClose={() => setShowAlert(false)}
        >
          <Alert severity="info" sx={{ width: '100%' }}>
            Item removed from cart.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Cart;

