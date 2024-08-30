import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/MyBookings.module.css'; // Import CSS module for specific styling

// Example booking data
const bookings = [
  {
    id: '1',
    date: '2024-09-10',
    time: '10:00 AM',
    status: 'Upcoming',
    details: 'Driving Test - Vehicle Handling',
  },
  {
    id: '2',
    date: '2024-08-25',
    time: '2:00 PM',
    status: 'Completed',
    details: 'Theory Test - Road Signs',
  },
];

const MyBookingsPage: React.FC = () => {
  return (
    <Layout>
      <header className={styles.header}>
        <h1>My Bookings</h1>
      </header>

      <section className={styles.bookingsSection}>
        <div className={styles.bookingsList}>
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <div key={booking.id} className={styles.bookingCard}>
                <h2>Booking ID: {booking.id}</h2>
                <p>Date: {booking.date}</p>
                <p>Time: {booking.time}</p>
                <p>Status: <span className={styles[booking.status.toLowerCase()]}>{booking.status}</span></p>
                <p>Details: {booking.details}</p>
                <div className={styles.bookingActions}>
                  {booking.status === 'Upcoming' && (
                    <>
                      <button className={styles.cancelButton}>Cancel</button>
                      <button className={styles.rescheduleButton}>Reschedule</button>
                    </>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>No bookings found.</p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default MyBookingsPage;