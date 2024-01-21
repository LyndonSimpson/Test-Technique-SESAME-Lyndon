
/**
 * Validates user input during the signup process.
 *
 * @param {Object} userData - email and password provided by the user.
 * @returns {Object} errors 
 */
const validateSignup = ({ email, password }) => {
    const errors = {};

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'A valid email is required';
    }

    if (!password || password.length < 8) {
        errors.password = 'Password must be at least 8 characters long and include numbers, uppercase and lowercase letters, and special characters.';
    }

    return errors;
};

export default validateSignup;