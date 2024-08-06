require('dotenv').config();

const env = {};

env.VERSION = process.env.VERSION || '0.0.1';
env.NAME = process.env.NAME || 'NodeJS Server Boilerplate';
env.PORT = process.env.PORT || '8001';
env.DB_CONFIG = {
    DBNAME: process.env.DBNAME || 'mydatabase',
    DBUSERNAME: process.env.DBUSERNAME || 'root',
    DBPASSWORD: process.env.DBPASSWORD || '',
    DBHOST: process.env.DBHOST || 'localhost',
    DBPORT: process.env.DBPORT || '3366',
    DBDIALECT: process.env.DBDIALECT || 'mysql',
    DBSCHEMA: process.env.DBSCHEMA || 'my_schema',
};

module.exports = env;