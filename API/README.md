# Backend API for Web App

## Introduction

This repository contains the backend API for a web application. The API is designed with a simple yet expandable structure, connecting to MongoDB Atlas for storing user credentials and interfacing with Builder.io to retrieve articles for authenticated users.

## Features

- **User Authentication**: Handles creating new user accounts and logging in with email and password.
- **Content Retrieval**: Fetches articles from Builder.io accessible only to connected users.
- **Security**: Utilizes bcrypt for hashing passwords before storing them in the MongoDB Atlas cluster.
- **Session Management**: Implements JWT for secure token storage on the client side.

## Technologies

- **Express.js**: The server framework for handling HTTP requests.
- **MongoDB Atlas**: Cloud database service used for storing user data.
- **Bcrypt**: For password hashing.
- **JSON Web Token (JWT)**: For managing user sessions.

## Getting Started

### Prerequisites

Before running the server, make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository to your local machine.
2. Navigate to the 'API' directory.
3. Install the necessary dependencies:

    ```shell
    npm install
    ```

4. Create a `.env` file in the API directory. Use the `.env.example` as a template to add your credentials:

    ```shell
    cp .env.example .env
    ```

5. Fill in the `.env` file with your actual credentials for MongoDB Atlas and other services.

### Running the Server

1. Start the server with the following command:

    ```shell
    node dev index.js
    ```

2. Upon successful launch, the console will display:

    ```
    listening on port 3000
    ```

3. Once connected to the MongoDB Atlas cluster, the console will confirm:

    ```
    DB connected
    ```

## Contact

For any additional questions or comments, please contact [Lyndon](lyndon.simpson1@gmail.com).

---

Thank you for using our backend API!