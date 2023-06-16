let mysql = require('mysql');

let sqlquery = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'sql_hr'
});


sqlquery.connect(err =>{
    if(err) throw err;
    let query = `DELETE FROM employees
                WHERE employee_id = 11234`
  sqlquery.query(query, (err,result) =>{
    if(err) throw err;
console.log('operation is sucessfully done');
console.log(result.affectedRows)
  })
    
})