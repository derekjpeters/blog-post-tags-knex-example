# Blog Posts & Tags – Full Stack Project (Knex, SQLite, Express, React)

This project demonstrates how to model and interact with many-to-many relationships using:
- **Knex** (SQL query builder)
- **SQLite** (lightweight relational database)
- **Express** (Node.js server)
- **React** (Frontend UI)
- **Swagger** (API documentation)

---

## 📁 Project Structure

```
blog-posts-tags-knex/
├── client/                # React frontend (created with Create React App)
│   ├── public/            # Static index.html
│   └── src/               # App.js and other components
├── data/                  # SQLite database file
├── db-config.js           # Knex database setup
├── index.js               # Entry point for starting the server
├── knexfile.js            # Knex configuration
├── migrations/            # Database schema definitions
├── seeds/                 # Seed data to populate the database
├── public/                # Static frontend (legacy)
├── server.js              # Express server and API with Swagger
├── .gitignore             # Ignored files and folders
├── README.md              # You're reading it!
```

---

## 🚀 Getting Started

### 1. Clone the repo & install dependencies

```bash
git clone https://github.com/derekjpeters/blog-post-tags-knex-example.git
cd blog-posts-tags-knex-example
npm install
```

### 2. Create the SQLite data folder

```bash
mkdir -p data
```

### 3. Run migrations and seed the DB

```bash
npx knex migrate:latest
npx knex seed:run
```

### 4. Start the backend

```bash
npm run server
```

Backend will run at: `http://localhost:4000`

### 5. Start the frontend

```bash
cd client
npm install
npm start
```

Frontend will run at: `http://localhost:3000`

---

## 🔗 API Endpoints

| Method | Endpoint        | Description                      |
|--------|------------------|----------------------------------|
| GET    | `/posts`         | Returns all blog posts           |
| GET    | `/tags`          | Returns all tags                 |
| GET    | `/post-tags`     | Returns joined post-tag data     |
| GET    | `/api-docs`      | Swagger UI API Documentation     |

---

## 📚 Swagger API Docs

Interactive API docs available at:

👉 `http://localhost:4000/api-docs`

---

## 🧪 Tech Stack

- **Backend**: Node.js, Express, Knex, SQLite
- **Frontend**: React, Axios
- **Docs**: Swagger + swagger-ui-express

---

## 🧾 License

MIT
