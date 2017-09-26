const query = require('../db.js');
//获取详细文章
async function searchId(params){
	let searchID = Number(params.postId) + (Number(params.current)-1)*5+1;
	let sql = {sql:`select potst.title,potst.author,potst.statement,potst.url,potst.time,content.content from potst inner join content where potst.id = ${searchID} and content.id = ${searchID}`};
	let content = await query(sql);
	return content;
}
async function getDetails(ctx){
	let content = await searchId(ctx.query);
	ctx.body = content;
}
module.exports = {getDetails};