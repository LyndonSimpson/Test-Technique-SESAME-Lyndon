const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Veuillez entrer un mail valide'] 
    },
    passwordHash: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },
    lastLogin: {
        type: Date,
        default: null 
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;