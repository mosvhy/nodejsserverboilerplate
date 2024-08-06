const Sequelize = require("sequelize");
const { DB_CONFIG } = require("../env");

const db = new Sequelize(
  DB_CONFIG.DBNAME,
  DB_CONFIG.DBUSERNAME,
  DB_CONFIG.DBPASSWORD,
  {
    dialect: DB_CONFIG.DBDIALECT,
    host: DB_CONFIG.DBHOST,
    port: DB_CONFIG.DBPORT,
    logging: false,
    timezone: '+07:00',
    pool: {
      max: 5,
      min: 2,
      idle: 20000,
      acquire: 20000,
    },
  }
);

console.log(`Database : ${db.options.host} connected on ${process.env.NODE_ENV} mode`);
module.exports = db;