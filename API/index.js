const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongooseConnection = require('./db/MongoDB_ATLAS');
const appConfig = require('./config/expressConfig');

const routes = require('./app/router/routes'); //called after dotenv.config() otherwise jwtSecret is undefined in routes.js since jwtSecret is stored in .env

const app = express();
app.use(express.json());
appConfig(app); // Configure Express

app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});