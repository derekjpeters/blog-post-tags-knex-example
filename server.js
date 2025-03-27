const express = require('express');
const db = require('./db-config');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const server = express();
server.use(express.json());
server.use(express.static(path.join(__dirname, 'public')));

// Swagger Setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Blog Posts & Tags API',
      version: '1.0.0',
      description: 'API for managing blog posts and their tags',
    },
  },
  apis: ['./server.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all blog posts
 *     responses:
 *       200:
 *         description: A list of blog posts
 */
server.get('/posts', async (req, res) => {
  try {
    const posts = await db('posts');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * /tags:
 *   get:
 *     summary: Get all tags
 *     responses:
 *       200:
 *         description: A list of tags
 */
server.get('/tags', async (req, res) => {
  try {
    const tags = await db('tags');
    res.json(tags);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * /post-tags:
 *   get:
 *     summary: Get all post-tag relationships
 *     responses:
 *       200:
 *         description: A list of post-tag relationships
 */
server.get('/post-tags', async (req, res) => {
  try {
    const data = await db('post_tags as pt')
      .join('posts as p', 'pt.post_id', 'p.id')
      .join('tags as t', 'pt.tag_id', 't.id')
      .select('p.title', 't.name as tag');
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = server;