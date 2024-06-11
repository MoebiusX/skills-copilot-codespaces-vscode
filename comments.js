   // Create web server
   const express = require('express');
   const app = express();
   const port = 3000;

   // Create comments array
   const comments = [
     { name: 'John Doe', comment: 'I am John' },
     { name: 'Jane Doe', comment: 'I am Jane' },
   ];

   // Get all comments
   app.get('/comments', (req, res) => {
     res.json(comments);
   });

   // Get a comment by index
   app.get('/comments/:index', (req, res) => {
     const index = req.params.index;
     res.json(comments[index]);
   });

   // Add a comment
   app.post('/comments', (req, res) => {
     const comment = req.body;
     comments.push(comment);
     res.json(comment);
   });

   // Update a comment
   app.put('/comments/:index', (req, res) => {
     const index = req.params.index;
     const comment = req.body;
     comments[index] = comment;
     res.json(comment);
   });

   // Delete a comment
   app.delete('/comments/:index', (req, res) => {
     const index = req.params.index;
     comments.splice(index, 1);
     res.json(comments);
   });

   // Start server
   app.listen(port, () => {
     console.log(`Server is running at http://localhost:${port}`);
   });
