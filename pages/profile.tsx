import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Profile.module.css'; // Import CSS module for specific styling

const ProfilePage: React.FC = () => {
  return (
    <Layout>
      <header className={styles.header}>
        <h1>Profile</h1>
      </header>

      <section className={styles.profileSection}>
        <div className={styles.profileHeader}>
          <h2>John Doe</h2>
          <p>Driving enthusiast with a passion for road safety.</p>
          <button className={styles.editButton}>Edit Profile</button>
        </div>

        <div className={styles.editForm}>
          {/* Form fields here */}
        </div>
      </section>
    </Layout>
  );
};

export default ProfilePage;