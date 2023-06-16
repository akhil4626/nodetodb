const mysql = require('mysql');

let sqlServer = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'testdata'
});

sqlServer.connect(err => {
    if(err) throw err;
    let query = "ALTER TABLE address ADD COLUMN id int(10)";
    sqlServer.query(query, (err,result) => {
        if(err) throw err;
        console.log("the alteration is done");
        console.log(" ");
        console.log("the operation is successfully done");
    })
})