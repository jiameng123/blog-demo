const query = require('../db.js');
async function allArticle(params){
	/* sql语句中设置nestTables ：true时，将解决两个表之间同名字段冲突问题，结果展示为[{
    表格1： {
      fieldA：'...'
      fieldB：'...'
    }，
    table2：{
      fieldA：'...'
      fieldB：'...'
    }，
  }，...]
  */

  let curr = (params.current - 1)*params.item;
  let sql = 'select count(1) as count from potst inner join content on potst.id = content.id'; 
	let sqlCon = {sql:`select potst.title,potst.time,content.content from potst inner join content on potst.id = content.id limit ${curr},${params.item}`};
	let count = await query(sql);
	let dataList = await query(sqlCon);
  //匹配所有HTML标签
  let reg = /<(S*?)[^>]*>.*?|<.*?\/>/g;
  dataList.forEach(item=>{
      item.content = item.content.replace(reg,'').substring(0,21)+'...';
  })
	count[0].list = dataList;
	return count;
}
async function getArticle(ctx,next){
	let dataList = await allArticle(ctx.query);
	ctx.body = dataList;
}


module.exports = {getArticle};