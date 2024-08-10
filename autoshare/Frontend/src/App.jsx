import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import CarList from './components/CarList';
import BookingPage from './components/BookingPage';
import PaymentForm from './components/PaymentForm';
import ReviewPage from './components/ReviewPage'; // Review Page
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/review" element={<ReviewPage />} /> {/* Add the new review route */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
