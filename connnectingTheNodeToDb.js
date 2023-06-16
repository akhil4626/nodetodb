const mysql = require('mysql');

let sqlconnect = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root'
});

sqlconnect.connect(err => {
    if(err) throw err;
    console.log("first step that is establishing the connection is successfull")
})