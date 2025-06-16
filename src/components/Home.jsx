// File: src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  CardMedia
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import BuildIcon from '@mui/icons-material/Build';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import productsData from '../json/db.json';
import img1 from '/media/1.jpg';

const Home = () => {
  const featuredProducts = productsData.products?.slice(0, 3) || [];

  return (
  <Box
  sx={{
   
    minHeight: '100vh', // Full viewport height
    display: 'flex',
    flexDirection: 'column',
    marginLeft:12,
    justifyContent: 'center', // center vertically
    textAlign: 'center',
    backgroundColor: 'white',
    px: 2,
  }}
>
      {/* Hero Banner */}
      <Box
        sx={{
            marginTop:10,
            marginLeft:-15,
          height: 500,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 2, maxWidth: 800,  }}>
          <Typography variant="h3" color='white' fontWeight="bold" gutterBottom>
            Exquisite Jewelry Collection
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Discover timeless elegance with our handcrafted pieces
          </Typography>
          <Button
            component={Link}
            to="/products"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ boxShadow: 3 }}
            endIcon={<ArrowForwardIcon />}
          >
            Shop Collection
          </Button>
        </Box>
      </Box>

      {/* Why Choose Section */}
      <Box sx={{ py: 10, marginLeft:-20}}>
        <Container> 
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Why Choose Luxe Jewelry?
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth="md" mx="auto">
              Trusted by thousands for over 25 years. We blend timeless tradition with modern craftsmanship.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                icon: <VerifiedIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
                title: 'Certified Quality',
                description: 'Every piece is certified for authenticity and backed with a lifetime guarantee.',
              },
              {
                icon: <BuildIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
                title: 'Expert Craftsmanship',
                description: 'Handmade by skilled artisans using centuries-old techniques.',
              },
              {
                icon: <HeadphonesIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
                title: 'Personalized Service',
                description: 'Enjoy custom design consultations and dedicated support.',
              },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRadius: 3,
                    boxShadow: 3,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardContent>
                    {item.icon}
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Products */}
      <Box sx={{ py: 10 ,marginLeft:-30}}>
        <Container>
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Featured Collection
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Handpicked favorites from our latest arrivals
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent={'center'}>
            {featuredProducts.length > 0 ? (
              featuredProducts.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      boxShadow: 3,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt={product.name}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold">
                        {product.name}
                      </Typography>
                      <Typography color="text.secondary">₹{product.price}</Typography>
                    </CardContent>
                    <Box textAlign="center" pb={2}>
                      <Button
                        component={Link}
                        to={`/products/${product.id}`}
                        variant="outlined"
                        color="primary"
                        sx={{ textTransform: 'none' }}
                      >
                        View Details
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Box textAlign="center" py={6}>
                  <Typography color="text.secondary">
                    Loading featured products...
                  </Typography>
                </Box>
              </Grid>
            )}
          </Grid>

          <Box textAlign="center" mt={6}>
            <Button
              component={Link}
              to="/products"
              variant="contained"
              size="large"
              sx={{ px: 4, py: 1.5, '&:hover': { backgroundColor: 'secondary.dark' } }}
              endIcon={<ArrowForwardIcon />}
            >
              View All Products
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
