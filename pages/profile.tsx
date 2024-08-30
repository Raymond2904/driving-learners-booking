import React, { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Profile.module.css'; // Import CSS module for specific styling

const ProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    bio: 'Driving enthusiast with a passion for road safety.'
  });

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setProfileData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    // Save profile changes here
    setIsEditing(false);
  };

  return (
    <Layout>
      <header className={styles.header}>
        <h1>Profile</h1>
      </header>

      <section className={styles.profileSection}>
        <div className={styles.profileHeader}>
          <div className={styles.profileImagePlaceholder}></div>
          <h2>{profileData.name}</h2>
          <p>{profileData.bio}</p>
          <button onClick={handleEditToggle} className={styles.editButton}>
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        {isEditing ? (
          <div className={styles.editForm}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
            />

            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={profileData.phone}
              onChange={handleInputChange}
            />

            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={profileData.bio}
              onChange={handleInputChange}
            ></textarea>

            <button onClick={handleSave} className={styles.saveButton}>Save Changes</button>
          </div>
        ) : (
          <div className={styles.profileDetails}>
            <p>Email: {profileData.email}</p>
            <p>Phone: {profileData.phone}</p>
          </div>
        )}
        
        <div className={styles.activityHistory}>
          <h3>Activity History</h3>
          <ul>
            <li>Booking on 2024-09-01</li>
            <li>Completed Test on 2024-08-15</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default ProfilePage;