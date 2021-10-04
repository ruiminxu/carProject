const Sequelize = require('sequelize');
const db = require('../index');

const Car = db.define('Car', {
        id: {
            type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
        },
        brand: {
            type: Sequelize.STRING,
                allowNull: false,
        },
        make: {
            type: Sequelize.STRING,
                allowNull: false,
        },
        model: {
            type: Sequelize.STRING,
                allowNull: false,
        },
        odometer: {
            type: Sequelize.INTEGER,
                allowNull: false,
        },
        owner: {
            type: Sequelize.STRING,
                allowNull: false,
        }
    }, 
{
    tableName: 'Car',
});

module.exports = Car;