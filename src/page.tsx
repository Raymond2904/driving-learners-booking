// src/app/page.tsx
import React from 'react';
import Navbar from '../components/Navbar'; // Adjust path if needed

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to the Learner's Test Booking Site</h1>
      <p>Book your learner's test easily and quickly.</p>
    </div>
  );
};

export default HomePage;