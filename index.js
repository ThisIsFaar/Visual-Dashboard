const express = require('express');
const connectDB = require('./DB');
const app = express();
const dataRoutes = require('./Routes/data');
const PORT = process.env.PORT || 5000;
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
// parse application/json
app.use(bodyParser.json());

connectDB();

app.use('/api', dataRoutes);
app.use('/api', (req, res) => {
  res.send('API is Working');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
