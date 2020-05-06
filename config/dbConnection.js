var mysql = require('mysql');

var connMySQL = function (){
    console.log('A com o BD foi estabelecida');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'aramis29',
        database: 'portal_noticias'
    });
}

module.exports = function (){
    console.log('O autoload carregou o modulo de conexao com o BD');
    return connMySQL;
}