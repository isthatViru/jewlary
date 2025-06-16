import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Paper
} from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can send data to backend if needed
    console.log('Form submitted:', formData);

    setSnackbarOpen(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'grey.100', minHeight: '100vh' }}>
      <Container maxWidth="sm">
        <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
            Contact Us
          </Typography>
          <Typography align="center" color="text.secondary" mb={3}>
            Have questions? We'd love to hear from you.
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              name="name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              label="Email Address"
              name="email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
            />
            <TextField
              label="Your Message"
              name="message"
              multiline
              rows={4}
              fullWidth
              value={formData.message}
              onChange={handleChange}
              margin="normal"
              required
            />
            <Box textAlign="center" mt={3}>
              <Button type="submit" variant="contained" size="large">
                Send Message
              </Button>
            </Box>
          </form>
        </Paper>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
            Message sent successfully!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;
