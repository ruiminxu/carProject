const Sequelize = require('sequelize');
const db = require('../index');

const User = db.define('User', {
        username: {
            type: Sequelize.STRING(30),
                allowNull: false,
                unique: true,
                primaryKey: true,
        },
        password: {
            type: Sequelize.STRING(300),
                allowNull: false,
        },
        firstname: {
            type: Sequelize.STRING(30),
                allowNull: false,
        },
        lastname: {
            type: Sequelize.STRING(30),
                allowNull: false,
        },
    }, 
{
    tableName: 'User',
});

module.exports = User;