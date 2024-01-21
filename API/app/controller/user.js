const userDataMapper = require('../dataMapper/user');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const signUp = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).send('Email and password are required');
        }

        const newUser = await userDataMapper.createUser({ email, password });

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

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
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
        const jwtContent = { userId: user._id };
        const jwtOptions = { algorithm: 'HS256', expiresIn: '3h' };
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

module.exports = { signUp, login };