const mysql = require('mysql');

let connectsql = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'testdata'
});

connectsql.connect(err => {
    if(err) throw err;
    let query = `INSERT INTO address(name,customer_address,emloyee_id)
      values('akhil','4th cross',111)`;
      connectsql.query(query,(err,result) => {
        if(err) throw err;
      console.log(result);
      console.log("operation sucess")
      })
})
