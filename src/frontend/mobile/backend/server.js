const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Elastic Beanstalk!');
});

// ❗ Important: bind only to the PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
