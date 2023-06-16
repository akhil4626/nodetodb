const mysql = require('mysql');

let connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'testdata'
});

connect.connect(err => {
    if(err) throw err;
    let query = "DROP TABLE address";
    connect.query(query,(err,result) => {
        if(err) throw err;
      console.log("its done");
      console.log(result.affectedRows);
    })

});