import React, { useState, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Box, Rating, Grid } from '@mui/material';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';


const ReviewPage = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { carId, carModel, image } = location.state || {};
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleBack = () => {
    navigate('/cars');
  };

  const handleSubmit = async (event) => {
    const userId = localStorage.getItem("userId");
    event.preventDefault();

    // Validate inputs
    if (rating < 1 || rating > 5) {
      setError('Rating must be between 1 and 5');
      return;
    }
    if (!review) {
      setError('Review text cannot be empty');
      return;
    }
    if (!token) {
      setError('You must be logged in to submit a review');
      return;
    }

    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      const response = await axios.post(
        'https://test-7-l727.onrender.com/api/reviews',
        { userId, carId, rating, review },
        config
      );

      setSuccess('Review submitted successfully');
      setTimeout(() => navigate('/cars'), 1000);
    } catch (err) {
      setError('Failed to submit review: ' + (err.response ? err.response.data.error : err.message));
    }
  };

  return (
    <Box p={3} classname="review">
      <Typography variant="h4" style={{ color: "white", textAlign: "center" }}>Rate and Review</Typography>
      
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
        <Typography variant="h6" style={{ color: "Gold", textAlign: "center" }}>{carModel}</Typography>

          <img 
            src={`https://test-7-l727.onrender.com/${image}`} 
            alt={carModel} 
            style={{ 
              width: '100%', 
              borderRadius: '8px', 
              objectFit: 'cover', 
              maxHeight: '300px' 
            }} 
          />
        </Grid>

        <Grid item xs={12} sm={6} md={8}>

          <form onSubmit={handleSubmit} style={{ marginTop: '16px' }}>
            {error && <Typography color="error">{error}</Typography>}
            {success && <Typography color="primary">{success}</Typography>}
            
            <Box mb={2}>
              <Rating
                name="rating"
                value={rating}
                onChange={(event, newValue) => setRating(newValue)}
                sx={{
                  '& .MuiRating-iconEmpty': {
                    color: 'white',
                  },
                }}
              />
            </Box>

            <TextField
              label="Review"
              fullWidth
              multiline
              rows={4}
              value={review}
              onChange={(event) => setReview(event.target.value)}
              variant="outlined"
              margin="normal"
              InputLabelProps={{
                style: { color: 'white' },
              }}
              InputProps={{
                style: { color: 'white' },
                sx: {
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                  },
                },
              }}
            />

            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
              Submit Review
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReviewPage;
