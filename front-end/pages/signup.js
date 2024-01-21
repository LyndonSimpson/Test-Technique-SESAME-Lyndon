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
    const [errors, setErrors] = useState({});
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateSignup({ email, password });
        if (Object.keys(validationErrors).length !== 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const data = await signupUser({ email, password });
            if (data && data.user) {
                setErrors({}); // Clear any errors
                router.push('/login'); // Redirect to login page
            } else {
                setErrors({ general: 'Signup failed: ' + data.message });
            }
        } catch (error) {
            console.error('Signup failed:', error);
            setErrors({ general: 'An unexpected error occurred. Please try again later.' });
        }
    };

    return (
        <div className="container"> {/* Use the container class for overall layout */}
            <Navbar />
            {/* Change the className here to "main-content" */}
            <div className="main-content"> 
                <form onSubmit={handleSubmit} className={styles.form}>
                    {Object.keys(errors).length > 0 && (
                        <div className={styles.error}>
                            {Object.values(errors).map((error, index) => (
                                <p key={index} className={styles.errorMessage}>{error}</p>
                            ))}
                        </div>
                    )}
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