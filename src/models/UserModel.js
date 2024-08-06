const { DataTypes } = require("sequelize");
const db = require("../config/database/db");

const dbConfig = {
  schema: db.options.schema,
  freezeTableName: true,
  timestamps: false,
  pool: {
    max: 5,
    min: 2,
    idle: 20000,
    acquire: 20000,
  },
};

const tableName = 'users';

const UserModel = db.define(
    tableName,
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    dbConfig
);

UserModel.migrate = async function () {
    try {
        console.log('migrate');
        await db.getQueryInterface().createTable(tableName, UserModel.getAttributes(), dbConfig);
        console.log('created')
    } catch (err) {
        console.log('error',err);
    }
}

module.exports = UserModel;