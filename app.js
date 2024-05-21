const express = require('express');
const app = express();
const port =  process.env.PORT || 3000;

// Підключення мідлварів
const logRequests = require('./middlewares/logRequests');
const basicAuth = require('./middlewares/basicAuth');
const validateUserInput = require('./middlewares/validateUserInput');
const checkArticleAccess = require('./middlewares/checkArticleAccess');

// Використання мідлварів
app.use(logRequests);
app.use(express.json());

// Маршрути
const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');

// Головний маршрут
app.get('/', (req, res) => {
  res.send('Get root route');
});

// Використання маршрутів з мідлварами
app.use('/users', basicAuth, userRoutes);
app.use('/articles', checkArticleAccess, articleRoutes);

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
