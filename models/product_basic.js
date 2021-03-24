const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./index');
const sequelize = db.sequelize;

class Basic extends Model {}


Basic.init({
  contry: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  language: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  summary: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  scale: {
    type: DataTypes.STRING,
    allowNull: false
  },
  vehicle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.BLOB,
    allowNull: false
  },
  time: {
    type: DataTypes.INTEGER,
    allowNull: false
  },

}, {
  sequelize,
  modelName: 'Basic',
  tableName: 'product_basic'
});

module.exports = Basic;