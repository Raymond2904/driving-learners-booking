import React from 'react';
import styles from '../styles/TestDates.module.css'; // Import CSS module for specific styling

const TestDates: React.FC = () => {
  const dates = ['2024-09-10', '2024-09-15', '2024-09-20']; // Example dates

  return (
    <div className={styles.testDates}>
      <h2>Available Test Dates</h2>
      <ul>
        {dates.map((date, index) => (
          <li key={index} className={styles.dateItem}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestDates;