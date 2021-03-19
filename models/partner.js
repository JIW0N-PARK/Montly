const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./index');
const sequelize = db.sequelize;

class Partner extends Model {}

Partner.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  kakaoID: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Partner',
  tableName: 'partners'
});

module.exports = Partner;