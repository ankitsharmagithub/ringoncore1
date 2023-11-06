const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const port = 5000;
require('dotenv').config();
const connectDB = require('./utils/db');
const passport = require('passport');

// Import passport.js configuration
require('./middleware/passport')(passport);

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(passport.initialize());

const userRoutes = require('./routes/userRoutes');

// Use passport.js authentication middleware in your route handlers


app.use('/', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
