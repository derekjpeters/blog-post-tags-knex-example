# Blog Posts & Tags — Knex + SQLite Example

This project demonstrates how to build table relationships using **Knex**, **SQLite**, and **Express** in a Node.js app. The schema supports a **many-to-many** relationship between `posts` and `tags`.

## 🧠 What You'll Learn

- Setting up Knex and SQLite
- Creating many-to-many relationships
- Running migrations and seeds
- Building an Express API to fetch related data

## 📁 Project Structure

```
blog-posts-tags-knex/
├── data/                  # SQLite database file
├── db-config.js           # Knex DB connection
├── index.js               # Starts the Express server
├── server.js              # API endpoints
├── knexfile.js            # Knex config
├── migrations/            # Table creation scripts
├── seeds/                 # Optional seed data
├── package.json
```

## 🚀 Setup & Run

```bash
npm install
npx knex migrate:latest
npx knex seed:run     # optional
npm run server
```

Then visit in the browser or Postman:

- [GET] `/posts`
- [GET] `/tags`
- [GET] `/post-tags`

## 💡 Example Data

- Posts: Hello World, Learning Knex
- Tags: Introduction, Knex
- Relationships:
  - "Hello World" is tagged with "Introduction"
  - "Learning Knex" is tagged with "Introduction" and "Knex"

## ✅ Requirements

- Node.js
- SQLite3
- Knex

## 🔗 License

MIT
