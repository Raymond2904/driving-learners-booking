import React, { useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Login.module.css'; // Import CSS module for specific styling

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
    } else {
      setError('');
      // Handle login
    }
  };

  return (
    <Layout>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Login</h1>
        </header>

        <section className={styles.loginSection}>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />

            {error && <p className={styles.error}>{error}</p>}

            <button type="submit" className={styles.submitButton}>Login</button>

            <div className={styles.forgotPassword}>
              <a href="/forgot-password">Forgot your password?</a>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default LoginPage;