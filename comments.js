// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

// Create express application
const app = express();

// Use body parser
app.use(bodyParser.json());
app.use(cors());

// Create comments object
const commentsByPostId = {};

// Create route for getting comments by post id
app.get('/posts/:id/comments', (req, res) => {
  // Send comments by post id
  res.send(commentsByPostId[req.params.id] || []);
});

// Create route for creating comment
app.post('/posts/:id/comments', (req, res) => {
  // Create comment id
  const commentId = randomBytes(4).toString('hex');

  // Get comment content from request body
  const { content } = req.body;

  // Get comments for post id
  const comments = commentsByPostId[req.params.id] || [];

  // Add comment to comments
  comments.push({ id: commentId, content });

  // Set comments for post id
  commentsByPostId[req.params.id] = comments;

  // Send status code 201 and comments
  res.status(201).send(comments);
});

// Listen on port 4001
app.listen(4001, () => {
  console.log('Listening on 4001');
});