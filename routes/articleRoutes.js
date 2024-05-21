const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController');

router.get('/', articleController.getArticles);
router.post('/', articleController.postArticle);
router.get('/:articleId', articleController.getArticleById);
router.put('/:articleId', articleController.putArticleById);
router.delete('/:articleId', articleController.deleteArticleById);

module.exports = router;

