import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signupUser } from '../utils/api'; 
import validateSignup from '../utils/validateSignup';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './Form.module.css';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateSignup({ email, password });
        if (Object.keys(errors).length !== 0) {
            console.error('Validation failed:', errors);
            return;
        }

        const data = await signupUser({ email, password });

        if (data && data.user) {
            router.push('/login'); // Redirect to login page
        } else {
            console.error('Signup failed:', data.message);
        }
    };

    return (
        <div className="container"> {/* Use the container class for overall layout */}
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
                <button className={styles.submitButton} type="submit">Sign Up</button>
            </form>
            </div>
            <Footer />
        </div>
    );
}