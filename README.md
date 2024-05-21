# Express Server

## Опис

Цей проект є простим сервером, розробленим з використанням Node.js і Express.js. Сервер надає маршрути для роботи з користувачами та статтями, використовуючи архітектурний паттерн MVC.

## Встановлення та запуск

### Вимоги

- Node.js
- npm або Yarn

# Express Server

## Опис

Цей проект є простим сервером, розробленим з використанням Node.js і Express.js. Сервер надає маршрути для роботи з користувачами та статтями, використовуючи архітектурний паттерн MVC.

## Встановлення та запуск

### Вимоги

- Node.js
- npm або Yarn

### Інструкції

1. Клонувати репозиторій:

   ```sh
   git clone <repo_url>
   cd express-server

   ```

2. Встановити залежності:
   npm install
   або
   yarn install
3. Запустити сервер:
   npm start
   або
   yarn start
4. Сервер буде слухати на порту 3000.

Маршрути
Головний маршрут
/: Повертає "Get root route".
Маршрути для користувачів
GET /users: Повертає "Get users route".
POST /users: Повертає "Post users route".
GET /users/:userId: Повертає "Get user by Id route: {userId}".
PUT /users/:userId: Повертає "Put user by Id route: {userId}".
DELETE /users/:userId: Повертає "Delete user by Id route: {userId}".
Маршрути для статей
GET /articles: Повертає "Get articles route".
POST /articles: Повертає "Post articles route".
GET /articles/:articleId: Повертає "Get article by Id route: {articleId}".
PUT /articles/:articleId: Повертає "Put article by Id route: {articleId}".
DELETE /articles/:articleId: Повертає "Delete article by Id route: {articleId}".

Цей README файл містить інструкції щодо встановлення, запуску та використання сервера, а також описує всі маршрути, які він обробляє.
