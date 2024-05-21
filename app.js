const express = require('express');
const app = express();
const port = 3000;

// Маршрути
const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');

// Головний маршрут
app.get('/', (req, res) => {
  res.send('Get root route');
});

// Використання маршрутів
app.use('/users', userRoutes);
app.use('/articles', articleRoutes);

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
