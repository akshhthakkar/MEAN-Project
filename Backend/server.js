const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/userdb')
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch(err => console.error('Connection Error:', err));

app.use('/api/auth', require('./routes/auth'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});