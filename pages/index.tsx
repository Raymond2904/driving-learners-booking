import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'; // Import CSS module for specific styling

const HomePage: React.FC = () => {
  return (
    <Layout>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to the Learner's Test Booking Site</h1>
          <p>Book your learner's test easily and quickly with our user-friendly platform.</p>
          <Link href="/booking" className={styles.ctaButton}>
            Book Your Test
          </Link>
        </div>
      </header>

      <section className={styles.features}>
        <h2>Why Choose Us?</h2>
        <div className={styles.feature}>
          <img src="/images/easy-booking.png" alt="Easy Booking" className={styles.featureImage} />
          <h3>Easy Booking</h3>
          <p>Schedule your test in just a few clicks with our intuitive booking system.</p>
        </div>
        <div className={styles.feature}>
          <img src="/images/experienced-instructors.png" alt="Experienced Instructors" className={styles.featureImage} />
          <h3>Experienced Instructors</h3>
          <p>Learn from the best instructors who will guide you through every step.</p>
        </div>
        <div className={styles.feature}>
          <img src="/images/quick-results.png" alt="Quick Results" className={styles.featureImage} />
          <h3>Quick Results</h3>
          <p>Get your test results quickly and efficiently after your exam.</p>
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>What Our Users Say</h2>
        <div className={styles.testimonial}>
          <p>"The booking process was smooth and hassle-free. Highly recommend!"</p>
          <p>- Jane Doe</p>
        </div>
        <div className={styles.testimonial}>
          <p>"Excellent instructors and a very user-friendly platform. I passed my test with ease."</p>
          <p>- John Smith</p>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2024 Learner's Test Booking Site. All rights reserved.</p>
      </footer>
    </Layout>
  );
};

export default HomePage;