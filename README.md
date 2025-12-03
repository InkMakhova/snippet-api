# Code Snippet Vault (Project 2)

A full-stack developer tool built with Node.js, Express, MongoDB, and Mongoose.
It allows users to create, store, filter, and manage reusable code snippets across multiple languages — creating a personal knowledge base for developers.

## Live Deployment
Live:

## Run Locally

### Prerequisites

- Node.js v18+
- MongoDB Atlas account or local MongoDB instance

### Setup Instructions

1. **Clone the repository**
   You can clone using HTTPS (recommended for most users) or SSH (if you’ve set up SSH keys with GitHub).

   **Using HTTPS:**
   ```bash
   git clone https://github.com/InkMakhova/snippet-api.git
   ```
   **Using SSH:**
   ```bash
   git clone git@github.com:InkMakhova/snippet-api.git
   ```
    **Using GitHun CLI:**
   ```bash
   gh repo clone InkMakhova/snippet-api
   ```
   
2. **Navigate into the project folder**
    ```bash
   cd your-path/snippet-api
   ```
3. **Install dependencies**
    ```bash
    npm install
   ```
4. **Start the application**
    ```bash
    npm start
   ```
   
5. **Open in your browser**
   Go to [http://localhost:3000/](http://localhost:3000/)

## Features

- Add, view, filter, and delete code snippets
- Filter snippets by language using `?lang=javascript`
- Limit results using `?limit=5`
- Modern dark GitHub-style UI
- Persistent MongoDB storage

## API Endpoints

- `GET /api/snippets` — List all snippets (supports `?lang=` and `?limit=`)
- `GET /api/snippets/:id` — Get a snippet by ID
- `POST /api/snippets` — Create a new snippet
- `PUT/PATCH /api/snippets/:id` — Update a snippet
- `DELETE /api/snippets/:id` — Delete a snippet

## Technology Stack

- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Frontend: Vanilla JavaScript, HTML, CSS

## Reflection
The Code Snippet Vault project demonstrates full CRUD functionality using a modern backend powered by MongoDB and Mongoose. It serves as a practical tool for organizing reusable snippets while reinforcing RESTful API patterns and async front-end communication.
Future improvements could include integrating a database such as MongoDB or PostgreSQL to provide persistence, scalability, and support for concurrent users. Enhancements like user authentication, sorting, and pagination would further align the system with real-world CRM functionality. Rebuilding the interface with React.js would improve modularity, performance, and maintainability, while adopting a design system such as Material UI or Chakra UI would ensure consistent visual standards. Replacing fetch() with Axios would enhance API handling and error management. Finally, containerizing the application with Docker would streamline deployment and ensure consistency across development and production environments.
