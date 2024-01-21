Readme backend

This directory is the back-end for the web app. It connects to mongoDB ATLAS (cloud service) to store user account information (create and read for mail and password). It also retrieves articles accessible only to a connected user from builder.io. All this logic is run through a router containing all 3 routes : create a new user, login as a registered user, retrieve articles from builder.io.

The API is simple but the structure was thought out as to accomodate more logic in the case of expansion.

The server uses express.

For security, passwords are hashed using bcrypt, and it is only the hashed password that is stored in the mongoDB ATLAS cluster. 

For secure sessions, a token is stored in the localstorage on the client side using JWT.


First, you need to install dependencies from package.json using "npm install" in 'API' directory. 

Create a .env file in the API directory. This .env file will need to have all the credentials shown in the example file .env.example. 

When all dependencies are installed sucessfully and the ".env" file is setup with the actual credentials, you can launch the server running 'node dev index.js' from the API directory. If the server is correctly launched it will show "listening on port 3000" in the console and if it connects sucessfully to mongoDB ATLAS cluster the console will show "DB connected".