var mysql = require('mysql');

var conexion = mysql.createConnection({
    host : 'localhost',
    database : 'IPM',
    user : 'root',
    password : '',
    port : 3306,
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + conexion.threadId);
});

module.exports = conexion
