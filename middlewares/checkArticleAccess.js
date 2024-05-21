function checkArticleAccess(req, res, next) {
  const userHasAccess = true; // Тут ви можете реалізувати перевірку прав доступу
  if (!userHasAccess) {
      return res.status(403).send('Access denied.');
  }
  next();
}

module.exports = checkArticleAccess;
