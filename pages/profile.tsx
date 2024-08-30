import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import styles from '../styles/Profile.module.css'; // Import CSS module for specific styling

const ProfilePage: React.FC = () => {
  return (
    <Layout>
      <header className={styles.header}>
        <h1>Profile</h1>
      </header>

      <section className={styles.profileSection}>
        <div className={styles.profileHeader}>
          <Image
            src="/images/profile-placeholder.png"
            alt="Profile"
            width={150}
            height={150}
            className={styles.profileImage}
          />
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