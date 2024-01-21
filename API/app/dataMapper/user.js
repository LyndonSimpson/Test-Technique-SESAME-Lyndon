const User = require('../models/User'); 
const bcrypt = require('bcrypt');

/**
 * Creates a new user record in the database.
 * Hashes the user's password for security and sets the createdAt timestamp.
 * Returns a sanitized user object without sensitive data like password hash.
 *
 * @param {Object} userData - Object containing the email and password of the user.
 * @returns {Object} Sanitized user object including _id, email, createdAt, and lastLogin fields.
 * @throws Will throw an error if there's an issue during user creation or database operation.
 */
const createUser = async (userData) => {
    try {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = new User({
            email: userData.email,
            passwordHash: hashedPassword,
            createdAt: new Date(),
            lastLogin: null 
        });

        await user.save();
        return {
            _id: user._id,
            email: user.email,
            createdAt: user.createdAt,
            lastLogin: user.lastLogin
        }; // excludes password hash
    } catch (error) {
        console.error('Error creating new user:', error);
        throw error;
    }
};

/**
 * Retrieves a user record from the database by email.
 * Useful for login and registration operations to check if a user already exists.
 *
 * @param {string} email - The email address of the user to retrieve.
 * @returns {Object} The user object from the database if found, otherwise null.
 * @throws Will throw an error if there's an issue during the database operation.
 */
const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email: email });;
        return user;
    } catch (error) {
        console.error('Error fetching user by email:', error);
        throw error;
    }
};

module.exports = { createUser, getUserByEmail };