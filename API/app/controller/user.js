const userDataMapper = require('../dataMapper/user');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/**
 * Handles user sign-up requests.
 * Validates the email and password against specific regex patterns for security measures.
 * Checks if the user already exists, and if not, creates a new user record in the database.
 * Returns an error message for invalid input or existing user, and success message for newly created user.
 *
 * @param {express.Request} req - containing the user's email and password in the body.
 * @param {express.Response} res - Used to return success or error messages.
 */
const signUp = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            return res.status(400).json({
                message: "Please enter a valid email address."
            });
        }

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (!password || !passwordRegex.test(password)) {
            return res.status(400).json({
                message: "Password must be at least 8 characters long and include numbers, uppercase and lowercase letters, and special characters."
            });
        }

        const existingUser = await userDataMapper.getUserByEmail(email);
        if (existingUser) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        if (!email || !password) {
            return res.status(400).send('Email and password are required');
        }

        const newUser = await userDataMapper.createUser({
            email,
            password
        });

        res.status(201).json({
            message: "User created successfully",
            user: {
                email: newUser.email,
                createdAt: newUser.createdAt
            }
        });
    } catch (error) {
        console.error('Error in signUp controller:', error);
        res.status(500).send('Internal Server Error');
    }
};

/**
 * Handles user login requests.
 * Validates the provided credentials against the database entries.
 * If credentials are valid, generates a JWT token for the user session.
 * Returns an error message for invalid credentials or internal server error, and JWT token for successful login.
 *
 * @param {express.Request} req - user's email and password in the body.
 * @param {express.Response} res - Used to return the JWT token or error messages.
 */
const login = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;
        if (!email || !password) {
            return res.status(400).send('Email and password are required');
        }

        const user = await userDataMapper.getUserByEmail(email);
        if (!user) {
            return res.status(401).send('Invalid credentials');
        }

        const isValid = await bcrypt.compare(password, user.passwordHash);
        if (!isValid) {
            return res.status(401).send('Invalid credentials');
        }

        //user valid => create JWT token
        const jwtContent = {
            userId: user._id
        };
        const jwtOptions = {
            algorithm: 'HS256',
            expiresIn: '3h'
        };
        const token = jsonwebtoken.sign(jwtContent, process.env.JWT_SECRET, jwtOptions);
        res.json({
            message: "Logged in successfully",
            token: token
        });
    } catch (error) {
        console.error('Error in login controller:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    signUp,
    login
};