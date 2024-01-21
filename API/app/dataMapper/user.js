const User = require('../models/User'); 
const bcrypt = require('bcrypt');

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