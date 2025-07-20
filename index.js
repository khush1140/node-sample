const express = require('express');
const app = express();

app.get('/api/hello', (req, res) => {
  res.send('Hello Upgrad!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
