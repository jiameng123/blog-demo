const Koa = require('koa');
const app = new Koa();
app.use(async function(ctx,next){
	const start = new Date();
	await next();
	const ms = new Date() - start;
	cxt.set('X-Respones-Time',`${ms}ms`);
});

//logger
app.use(async function(ctx,next){
	const start = new Date();
	await next();
	const ms = new Date() - start;
	cxt.set('X-Respones-Time',`${ms}ms`);
});

app.use(ctx=>{
	ctx.body = 'Hello World';
});
app.listen(3040);