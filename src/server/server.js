/*var db = require('./db.js');
db.connect();*/
/*const Router = require('koa-router');
db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});*/
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

//bodyparser:该中间件用于post请求的数据
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

//引入控制器文件夹下的子路由，控制器文件夹用于处理详细的请求
const articleList = require('./router.js');
//装在子路由
router.use('/api',articleList.routes(),articleList.allowedMethods());

//加载路由中间件
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(8888);