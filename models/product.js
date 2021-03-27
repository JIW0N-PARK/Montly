const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./index');
const sequelize = db.sequelize;

class Product extends Model {}

Product.init({
  partner_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  basic_id: {
    type: DataTypes.INTEGER
  },
  course_id: {
    type: DataTypes.INTEGER
  },
  price_id: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'Product',
  tableName: 'products'
});

module.exports = Product;