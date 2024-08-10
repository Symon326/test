import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';
import './css/Navbar.css'; // Import CSS for Navbar styles

const Navbar = () => {
  return (
    <AppBar className="nav" position="static" >
      <Toolbar >
        <Button color="inherit" component={Link} to="/cars" className="nav-button ml-3 mr-3">Home</Button>
        <Button color="inherit" component={Link} to="/booking" className="nav-button ml-3 mr-3">Booking List</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;