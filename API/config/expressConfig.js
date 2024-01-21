// config for express is defined here with essental security aspects (cors, CSURF...)

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const session = require('express-session');
//const csurf = require('csurf');

module.exports = (app) => {
    const corsOptions = {
        origin: 'http://localhost:3001', //only the frontend port origin to access
        optionsSuccessStatus: 200 
    };

    app.use(cors(corsOptions));

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use(cookieParser(process.env.COOKIE_SECRET));

    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
    }));

    //app.use(csurf({ cookie: true }));

    //add other middlewares or configurations you need
};