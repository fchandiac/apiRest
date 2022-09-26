'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Profiles extends Model {
    
   }
  Profiles.init({
    user: { type: DataTypes.STRING },
    pass: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    mail: { type: DataTypes.STRING },
    privilege_id: {type: DataTypes.INTEGER}

  }, {
    sequelize,
    modelName: 'Profiles',
    underscored: true

  })
  return Profiles
}