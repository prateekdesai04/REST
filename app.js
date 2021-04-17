const express = require('express');

const app = express();

// Create Routes
app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/posts', (req, res) => res.send('Posts'));

// Start listening to the server
app.listen(4200, () => console.log('Server Up and Running...'));
