const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'clothes.db',
  // logging: false
});

const db = {
  sequelize,
  Sequelize,
  models: {},
};

db.models.Item = require('./models/Item.js')(sequelize);

module.exports = db;