const express = require('express');
const connectDB = require('./DB');
const app = express();

connectDB();

app.use('/', (req, res) => {
  res.send('API is Working');
});

app.listen(5000, () => {
  console.log('App is listening at 5000');
});
