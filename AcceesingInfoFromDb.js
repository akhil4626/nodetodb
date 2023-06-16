const { result } = require('lodash');
let mysql = require('mysql');

let sqlquery = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'sql_store'
});

sqlquery.connect(err =>{
    if(err) throw err;
    let query = `SELECT *
                FROM order_items
                WHERE order_id >2`
    
    sqlquery.query(query, (err,result,fields) => {
        if(err) throw err;
     console.log(result)
    console.log("Column names:");
    fields.forEach(function(field) {
      console.log(field.name);
    });
    })
})