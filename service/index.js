

let mysql = require("mysql");

var sql = mysql.createConnection({     
  host: 'localhost',       
  user: 'root',              
  password: 'root',       
  port: '3306',                   
  database: 'tab', 
}); 
//链接
sql.connect();

module.exports = {
  // 登录接口
  login(options) {
    let ev = `select * from user`;
    let datas = new Promise((resolve,reject) => {
      sql.query(ev, (err, data) => {
        // console.log(data, 'data===mysql');
        // console.log(JSON.stringify(data));
        // ctx.body = JSON.stringify({code: 200, data: data})
        // return JSON.stringify(data);
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      })
    })
    return datas;
  }
}