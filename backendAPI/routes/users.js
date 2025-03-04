var express = require('express');
var router = express.Router();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mysnasyo8516',
  database: 'cook'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL');
}
);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
