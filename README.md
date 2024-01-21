# Technical Test Project

Welcome to my technical test project. This repository consists of two main parts: the `API` (backend) and the `front-end`. These two projects work together to form a complete web application.

## Project Description

This technical test demonstrates a full-stack web application with a separate backend API and frontend interface. The backend connects to MongoDB Atlas for data persistence and interfaces with external services like Builder.io for content management. The frontend provides a user interface that interacts with the backend, presenting a seamless experience.

## Getting Started

To get the application running, you need to set up both the backend (API) and the frontend. The backend serves as the foundation, so it's recommended to start there.

### Backend Setup

Navigate to the `API` directory to find the backend portion of the project. Follow the instructions in the `README.md` file within that directory to install dependencies, set up environment variables, and launch the project.

### Frontend Setup

Once the backend is up and running, move to the `front-end` directory. A separate `README.md` file is provided there with instructions for setting up the frontend, installing dependencies, and running the project.

### Important Notes

- Each directory (`API` and `front-end`) contains its own `package.json` file. Dependencies must be installed separately within each project directory.
- Environment variables need to be set up for the back-end as per the `.env.example` file in the API.
- It's crucial to start the backend server before the frontend as the latter depends on the API provided by the backend.

## Installation Order

1. Clone this repository to your local machine.
2. Set up the backend:
    - Navigate to the `API` directory.
    - Install dependencies and set up the environment.
    - Start the backend server.
3. Set up the frontend:
    - Navigate to the `front-end` directory.
    - Install dependencies.
    - Launch the frontend application.

## Contact

Should you encounter any issues or have questions, feel free to reach out at [Lyndon](https://lyndonsimpson.github.io/CV_Lyndon.simpson/).

---

Thank you for engaging with this technical test project. Your feedback and queries are most welcome! 

## Choice of Architecture and libraries

### API 

For the backend architecture, I implemented the MVC (Model-View-Controller) pattern, augmented by a DataMapper layer. The DataMapper is responsible for interacting with the MongoDB Atlas cluster, thereby abstracting database communications. Controllers handle the incoming requests and outgoing responses, encapsulating the business logic of the application. Centralizing all route methods in the router allows it to efficiently manage the three essential routes: signup, login, and articles retrieval.

JWT (JSON Web Token) authentication logic has been encapsulated within middleware to ensure a clean separation of concerns and to facilitate token verification across different routes.

Express application configurations have been organized in a dedicated file separate from index.js to modularize the setup and provide a clear distinction between server initialization and configuration settings.

I refactored and abstracted logic wherever feasible to ensure that the application remains simple yet highly scalable. This approach guarantees that the application infrastructure can support the expansion of features and database schema modifications without significant refactoring.

MongoDB Atlas was selected as the database solution due to its cloud-based nature, which offers adaptability and scalability. Such a choice ensures that as the application grows, the database can be scaled accordingly to meet increased demand and data complexity. more models can be created if necessary.

Since the project is a demo and doesn't require CSURF protection unless deployed on the web, i saw no need to implement it here, but it is the next feature to be added if the project is upgraded.


### Front-end

For the front-end i decided to use components for the header and the footer as they are reused accross all 3 pages of the web app. Such a modular design simplifies updates and maintenance; changes made to either the header or footer are universally propagated, enhancing code maintainability and efficiency.

Instead of integrating a specific style library, I opted for pure CSS to fulfill the styling requirements of the project. This decision was made to keep the application lightweight and to avoid unnecessary complexity, considering that the project's design needs were adequately met with vanilla CSS.

Client-side validations are implemented to enhance the user experience (UX), not as a security measure. For example, verifying the format of an email address is done on the client side, providing immediate feedback to the user and reducing server-side load for such trivial checks.

Separation of concerns is a key principle I adhered to, especially with functionality like API calls and validation logic. These are organized within a utils directory, ensuring that such utilities are easily accessible for reuse and that the codebase remains well-structured and comprehensible.

