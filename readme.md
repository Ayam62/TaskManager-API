# Task Manager API

A simple RESTful API for managing tasks and users, built with Node.js, Express, MongoDB, and JWT authentication.

---

## Features

- **User Authentication:** Register, login, and logout with JWT-based authentication.
- **Task Management:** Create, read, update, and delete tasks.
- **User Profile:** Get, update, and delete user profile.
- **Protected Routes:** Only authenticated users can manage tasks and their profile.
- **Error Handling:** Consistent error responses for invalid requests.

---

## Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (JSON Web Token)
- bcrypt (for password hashing)
- dotenv (for environment variables)
- cors

---

## Getting Started

### 1. Clone the repository

```sh
git clone https://github.com/Ayam62/task-manager-api.git
cd task-manager-api
```

### 2. Install dependencies

```sh
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4. Start the server

```sh
npm run dev
```

The server will run on `http://localhost:5000` (or the port you set).

---

## API Endpoints

### Auth

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive a JWT
- `POST /api/auth/logout` — Logout user

### User

- `GET /api/user/current` — Get current user profile
- `PUT /api/user/update` — Update user profile
- `DELETE /api/user/delete` — Delete user account

### Tasks

- `POST /api/task/create` — Create a new task
- `GET /api/task/` — Get all tasks for the current user
- `GET /api/task/:id` — Get a specific task by ID
- `PUT /api/task/:id` — Update a task by ID
- `DELETE /api/task/:id` — Delete a task by ID

> **All `/api/user` and `/api/task` routes require a valid JWT in the `Authorization` header.**


## Author

- [Ayam Kattel](https://github.com/Ayam62)