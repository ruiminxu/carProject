const User = require('./User');
const Car = require('./ Car');

User.hasMany(Car, { foreignKey: 'username' });
Car.belongsTo(User, {foreignKey: 'username'});