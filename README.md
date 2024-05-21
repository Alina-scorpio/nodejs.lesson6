# Express Server

## Опис

Цей проект є прикладом сервера на Node.js з використанням Express.js. Він підтримує маршрути для користувачів і статей, використовуючи мідлвари для логування, автентифікації, валідації даних і перевірки прав доступу.

## Встановлення

1. Клонуйте репозиторій:

   ```sh
   git clone <URL>
   cd express-server
   ```

2. Встановіть залежності:
   ```sh
   npm install
   ```

## Запуск

1. Запустіть сервер:

   ```sh
   npm start
   ```

2. Сервер буде доступний за адресою `http://localhost:3000`.

## Маршрути

### Головний маршрут

- `GET /` - Повертає "Get root route".

### Користувачі

- `GET /users` - Повертає "Get users route".
- `POST /users` - Повертає "Post users route".
- `GET /users/:userId` - Повертає "Get user by Id route: {userId}".
- `PUT /users/:userId` - Повертає "Put user by Id route: {userId}".
- `DELETE /users/:userId` - Повертає "Delete user by Id route: {userId}".

### Статті

- `GET /articles` - Повертає "Get articles route".
- `POST /articles` - Повертає "Post articles route".
- `GET /articles/:articleId` - Повертає "Get article by Id route: {articleId}".
- `PUT /articles/:articleId` - Повертає "Put article by Id route: {articleId}".
- `DELETE /articles/:articleId` - Повертає "Delete article by Id route: {articleId}".
