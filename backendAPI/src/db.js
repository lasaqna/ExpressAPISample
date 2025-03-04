var mysql = require('mysql2');

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mysnasyo8516',
  database: 'cook',
  connectionLimit: 10,
  namedPlaceholders: true
});

// 接続プールのテスト
pool.getConnection((err, connection) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
  connection.release(); // 接続を解放
});

module.exports = pool.promise(); // プロミスベースのプールをエクスポート