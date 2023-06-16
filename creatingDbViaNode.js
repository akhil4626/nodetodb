const { result } = require('lodash');
const mysql = require('mysql');

let sqlconnect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root'
});


sqlconnect.connect(err => {
    if(err) throw err;
    let query = "CREATE DATABASE testData";
    sqlconnect.query(query,(err,result)=>{
        if(err) throw err;
        console.log("the DB has been created  successfully")
        console.log(result)
    })
})