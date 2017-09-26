const ArticleList = require('./controller/index.js');
const articleDetails = require('./controller/articleDetails.js');
const Router = require('koa-router');
const childRouter = new Router();
childRouter
		.get('/article',ArticleList.getArticle)
		.get('/articleDetails',articleDetails.getDetails);
module.exports = childRouter;