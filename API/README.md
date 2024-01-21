# Backend API for Web Application

## Introduction

Welcome to the repository of our web application's Backend API. This API is crafted to be both straightforward and scalable, ensuring secure storage of user credentials via MongoDB Atlas and providing access to content from Builder.io, exclusively to authenticated users.

## Features

- **User Authentication**: Robustly manages the creation of new user accounts and facilitates user login using email and password credentials.
- **Content Retrieval**: Securely fetches articles from Builder.io, ensuring content is only accessible to authenticated users.
- **Security Measures**: Employs bcrypt for the secure hashing of passwords prior to their storage in the MongoDB Atlas database.
- **Session Management**: Leverages JWT (JSON Web Token) for the safe handling and storage of user session tokens on the client side.

## Technologies Employed

- **Express.js**: Utilized as the web server framework to efficiently handle incoming HTTP requests.
- **MongoDB Atlas**: Chosen for its robust cloud-based database services, providing reliable storage for user data.
- **Bcrypt**: Integrated for its secure password hashing capabilities.
- **JSON Web Token (JWT)**: Implemented for its trusted session management capabilities.

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine before proceeding with the server setup.

### Installation Steps

1. Clone the repository onto your local machine.
2. Proceed to the 'API' directory.
3. Execute the command below to install all the required dependencies:
    ```shell
    npm install
    ```
4. Generate a `.env` file within the API directory by copying the template from `.env.example`:
    ```shell
    cp .env.example .env
    ```
5. Populate the `.env` file with your actual MongoDB Atlas credentials and any other necessary service credentials.

### Launching the Server

1. Initiate the server using one of the following commands:
    ```shell
    npm start
    ```
    Alternatively:
    ```shell
    node index.js
    ```
    For development environments, you might prefer:
    ```shell
    node dev index.js
    ```
2. Upon successful start-up, the console will confirm by displaying:
    ```
    listening on port 3000
    ```
3. Connection to the MongoDB Atlas cluster will be verified with a console message:
    ```
    DB connected
    ```

## Contact Information

Should you have any inquiries or require further assistance, please feel free to reach out to [Lyndon](https://lyndonsimpson.github.io/CV_Lyndon.simpson/).

---

We appreciate your interest in our backend API! Your feedback and questions are always welcome.