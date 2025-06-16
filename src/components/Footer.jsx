// src/components/Footer.js
import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width:'100vw',
        backgroundColor: '#111',
        color: 'gold',
        mt: 4,
        pt: 6,
        pb: 3,
        px: { xs: 4, md: 12 },
      }}
    >
      <Grid container spacing={4}>
        {/* Brand & About */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Luxe Jewelry
          </Typography>
          <Typography variant="body2" color="grey.400">
            Elegant and timeless jewelry crafted with passion and precision. Celebrating love, beauty, and life.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="/" underline="hover" color="grey.300">
              Home
            </Link>
            <Link href="/products" underline="hover" color="grey.300">
              Products
            </Link>
            <Link href="/contact" underline="hover" color="grey.300">
              Contact
            </Link>
            <Link href="/about" underline="hover" color="grey.300">
              About Us
            </Link>
          </Box>
        </Grid>

        {/* Contact & Social */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Contact
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
            <EmailIcon fontSize="small" />
            <Typography variant="body2">support@luxejewels.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon fontSize="small" />
            <Typography variant="body2">+91 98765 43210</Typography>
          </Box>

          <Box sx={{ mt: 2 }}>
            <IconButton href="#" color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <TwitterIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ borderTop: '1px solid #444', mt: 4, pt: 2, textAlign: 'center' }}>
        <Typography variant="caption" color="grey.500">
          © 2025 Luxe Jewelry. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
