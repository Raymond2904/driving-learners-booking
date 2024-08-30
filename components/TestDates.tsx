import React from 'react';

const TestDates: React.FC = () => {
  const dates = ['2024-09-10', '2024-09-15', '2024-09-20']; // Example dates

  return (
    <div>
      <h2>Available Test Dates</h2>
      <ul>
        {dates.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestDates;