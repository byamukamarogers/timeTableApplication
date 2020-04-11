const Sequelize = require('sequelize');
let dbhost = 'localhost';
let dbname = 'timetablingsystem'; //PG
let dbuser = 'postgres'; //PG
let dbpassword='root'; //PG
let dbport='5432'; //PG

/* //  MYSQL
let dbname = 'timetableapp'; //MYSQL
let dbuser = 'root'; //MYSQL
let dbpassword=''; //MYSQL
let dbport='90'; */

module.exports.sequelize = new Sequelize(dbname, dbuser, dbpassword,{
host: dbhost,
port:dbport,
dialect:'postgres',
//dialect:'mysql',
logging:false,
omitNull:true,
pool:{max:5, min:0, acquire:30000, idle:10000}

});