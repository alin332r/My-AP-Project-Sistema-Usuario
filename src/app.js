const express = require('express');
const app = express();
const { sequelize } = require('../models');
const userRoutes = require('../routes/users');
const taskRoutes = require('../routes/tasks');

require('dotenv').config();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
