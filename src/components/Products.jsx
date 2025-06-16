// File: src/pages/Products.jsx
import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  CardMedia,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  Alert,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('⚠️ Failed to load products. Please check your server.');
        setLoading(false);
      });
  }, []);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedProduct(null);
    setOpen(false);
  };

  const addToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem('myCart')) || [];
    const exists = storedCart.find((item) => item.id === product.id);

    let updatedCart;
    if (exists) {
      updatedCart = storedCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...storedCart, { ...product, quantity: 1 }];
    }

    localStorage.setItem('myCart', JSON.stringify(updatedCart));
    setAlertOpen(true);
    handleClose();

    setTimeout(() => {
      navigate('/cart');
    }, 1200);
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'grey.100', minHeight: '100vh' }}>
      <Container>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Our Full Product Collection
        </Typography>

        {error && (
          <Typography color="error" align="center" mt={2}>
            {error}
          </Typography>
        )}

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" py={6}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={4} justifyContent="center" mt={2}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 340,
                    mx: 'auto',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.image || '/fallback.jpg'}
                    alt={product.name}
                    sx={{ height: 200, objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight="bold">
                      {product.name}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                      ₹{product.price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description?.substring(0, 60)}...
                    </Typography>
                  </CardContent>
                  <Box textAlign="center" pb={2}>
                    <Button
                      onClick={() => handleOpen(product)}
                      variant="outlined"
                      sx={{ textTransform: 'none' }}
                    >
                      View Details
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {!loading && products.length === 0 && !error && (
          <Typography align="center" color="text.secondary" mt={4}>
            No products found.
          </Typography>
        )}

        <Box textAlign="center" mt={6}>
          <Button
            component={Link}
            to="/"
            variant="contained"
            size="large"
            startIcon={<ArrowBackIcon />}
            sx={{ px: 4, py: 1.5, textTransform: 'none' }}
          >
            Back to Home
          </Button>
        </Box>
      </Container>

      {/* Product Modal */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{selectedProduct?.name}</DialogTitle>
        <DialogContent>
          <img
            src={selectedProduct?.image || '/fallback.jpg'}
            alt={selectedProduct?.name}
            style={{ width: '100%', borderRadius: 8, marginBottom: 16 }}
          />
          <DialogContentText>
            <strong>Price:</strong> ₹{selectedProduct?.price}
          </DialogContentText>
          <DialogContentText sx={{ mt: 2 }}>
            <strong>Description:</strong> {selectedProduct?.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Close
          </Button>
          <Button
            onClick={() => addToCart(selectedProduct)}
            variant="contained"
            color="primary"
          >
            Add to Cart
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for Add to Cart */}
      <Snackbar
        open={alertOpen}
        autoHideDuration={1500}
        onClose={() => setAlertOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setAlertOpen(false)} severity="success" sx={{ width: '100%' }}>
          Product added to cart!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Products;
