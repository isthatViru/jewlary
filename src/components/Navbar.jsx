import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="fixed" sx={{ backgroundColor: 'black',color:'gold',fontWeight:'2' }}>
    <Toolbar>
      <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <Typography variant="h6" component={Link} to="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
          Jewellery Shop
        </Typography>
      </Box>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/products">Products</Button>
      <Button color="inherit" component={Link} to="/cart">Cart</Button>
      <Button color="inherit" component={Link} to="/contact">Contact-us</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
