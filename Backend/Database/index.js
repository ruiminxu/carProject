const { Sequelize } = require('sequelize');

const db = new Sequelize('test', 'root', '1234', {
    host: '127.0.0.1',
    dialect: 'mysql',
})

const dbConnection = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');

        await db.sync({ force: true });
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

dbConnection();

module.exports = db;
