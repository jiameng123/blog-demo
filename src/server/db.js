const mysql  = require('mysql');
//创建sql数据池
const pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'jiameng123',
  database : 'blog',
  timezone : "08:00",
  charset  : "utf8"
});
/*
从连接池中取出连接。getConnection方法。
如无连接可用则隐式的建立一个数据库连接。
pool.getConnection(function(err,conn){
	conn为获取到的链接对象
})
*/
//sql为查询语句
const query = function(sql,values){
	return new Promise((res,rej)=>{
		pool.getConnection(function(err,conn){
			if(err){
				rej(err)
			} else{
				conn.query(sql,values,(err,rows)=>{
					if(err){
						rej(err)
					} else{
						res(rows);
					}
					conn.release();
				})
			}
		})
	})
}


module.exports = query;

//connection.end();