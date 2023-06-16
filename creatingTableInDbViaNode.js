const mysql = require('mysql');

let sqlserver = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database: 'testdata'
})

sqlserver.connect(err => {
    if(err) throw err;
    let createTable = "CREATE TABLE Address(name varchar(255),address varchar(255))"
    sqlserver.query(createTable, (err,result)=> {
        if(err) throw err;
        console.log("the table has been successfully created");
        console.log("");
        console.log(result);
    })
})