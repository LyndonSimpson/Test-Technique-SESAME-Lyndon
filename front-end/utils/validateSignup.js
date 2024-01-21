const validateSignup = ({ email, password }) => {
    const errors = {};

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'A valid email is required';
    }

    if (!password || password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
};

export default validateSignup;