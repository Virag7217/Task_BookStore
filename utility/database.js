const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'bookstore',
    password: 'Sea_Flux'
});

module.exports = pool.promise();