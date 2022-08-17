const express = require('express');
const connectDB = require('./DB');
const app = express();
const dataRoutes = require('./Routes/data');
const PORT = process.env.PORT || 5000;

connectDB();

app.use('/api', dataRoutes);
app.use('/api', (req, res) => {
  res.send('API is Working');
});

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
