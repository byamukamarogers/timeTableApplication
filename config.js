/*  */
const Sequelize = require('sequelize');
let dbname =  'timetablingsystem';
let dbhost =  'localhost';
let dbuser = 'postgres';
let dbpassword = 'root';
let dbport =  5432;
module.exports.Sequelize = Sequelize;
let conn = new Sequelize(dbname, dbuser, dbpassword, {
    host: dbhost,
    port: dbport,
    dialect: 'postgres',
    logging: false,
    omitNull: true,
    dialectOptions: {
        useUTC: false
    },
    timezone: '+03',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
test();
async function test() {
    try {
        await conn.authenticate();
        console.log('Connection is good');
    } catch (err) {
        console.log('Failed to get a connection');
    }
}
module.exports.sequelize = conn;
