const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Item extends Sequelize.Model {}
  Item.init({
    SKU: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: { 
        type: Sequelize.STRING, 
        allowNull: false,
        validate: {
            notEmpty: {
              // custom error message
              msg: 'Please provide a value for "name"',
            }
          },
    },
    description: { 
        type: Sequelize.STRING, 
        allowNull: false,
        validate: {
            notEmpty: {
              // custom error message
              msg: 'Please provide a value for "description"',
            }
          },
    },
    Image: { 
        type: Sequelize.STRING, 
        allowNull: false,
    }
  }, { sequelize });

  return Item;
};