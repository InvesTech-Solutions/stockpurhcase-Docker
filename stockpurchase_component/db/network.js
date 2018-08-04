var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'stockpurchase_db',
  user     : 'root',
  password : 'password', 
  database : 'bobbinhood'
});

module.exports = connection; 