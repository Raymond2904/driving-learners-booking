import React, { FormEvent } from 'react';
import styles from '../styles/BookingForm.module.css'; // Import CSS module for specific styling

interface BookingFormProps {
  onSubmit: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(); // Call the onSubmit function passed as a prop
  };

  return (
    <form onSubmit={handleSubmit} className={styles.bookingForm}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="date">Preferred Date</label>
      <input type="date" id="date" name="date" required />

      <label htmlFor="time">Preferred Time</label>
      <input type="time" id="time" name="time" required />

      <button type="submit" className={styles.submitButton}>Submit Booking</button>
    </form>
  );
};

export default BookingForm;