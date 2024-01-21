import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { loginUser } from '../utils/api'; 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './Form.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const data = await loginUser({ email, password });

          if (data && data.token) {
              localStorage.setItem('token', data.token); // Store the token
              router.push('/articles'); //redirect to articles page
          } else {
              console.error('Login failed:', data.message);
              alert('Mail or password invalid.'); // Display a simple alert to the user
          }
      } catch (error) {
          console.error('Error during login:', error);
          alert('Invalid mail or password.'); // Display a simple alert to the user
      }
  };

    return (
        <div className="container">
          <Navbar />
          <div className="main-content">
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              className={styles.inputField}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              className={styles.inputField}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button className={styles.submitButton} type="submit">Log In</button>
          </form>
          </div>
          <Footer />
        </div>
      );
}