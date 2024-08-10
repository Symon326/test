import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button, Typography, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { totalPrice } = location.state || {}; // Get the amount from state

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  const handlecancel=()=>{
    navigate('/booking');
  }


  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh" 
      bgcolor="#f0f0f0" // Optional: background color for the container
      padding={2} // Optional: add padding around the container
    >
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        width="100%" 
        maxWidth="500px" // Limit the width of the form
        border="1px solid #ccc" 
        padding="20px" 
        borderRadius="8px"
        bgcolor="#fff" // Optional: background color for the form
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)" // Optional: add shadow for better visibility
      >
        <Typography variant="h6" gutterBottom>
          Payment
        </Typography>
        <Typography variant="h6" gutterBottom>
          Amount: ${totalPrice ? totalPrice.toFixed(2) : '0.00'}
        </Typography>
        <Box 
          marginBottom="20px" 
          border="2px solid #007BFF" 
          padding="10px" 
          borderRadius="4px"
        >
          <CardElement />
        </Box>
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          disabled={!stripe}
          fullWidth // Optional: make the button full width
        >
          Pay
        </Button>
      </Box>
    </Box>
  );
};

export default PaymentForm;
