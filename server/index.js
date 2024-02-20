// SERVER AND AUTHENTICATION:
// https://medium.com/swlh/user-authentication-using-mern-stack-part-1-backend-cd4d193f15b1
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

//IMPORT ROUTES
const authRoutes = require('./routes/auth');
const monthRoutes = require('./routes/month');
// const { db } = require('./models/User');
const userModel = require('./models/User');
const monthModel = require('./models/Month');

//APP
const app = express();

//DATABASE
mongoose
  .connect(process.env.DATABASE,{
      useNewUrlParser: true,
      useUnifiedTopology: true
   })
  .then(() => console.log('DB Connected'));

//MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());

//ROUTES
app.use('/api', authRoutes);
app.use('/api', monthRoutes);

//START SERVER
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});