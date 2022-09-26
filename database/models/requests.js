'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Requests extends Model {
     }
    Requests.init({
        subject: { type: DataTypes.STRING },
        message: { type: DataTypes.TEXT },
        app: { type: DataTypes.STRING },
        viewed: { type: DataTypes.BOOLEAN, defaultValue: false },
        resolved: { type: DataTypes.BOOLEAN, defaultValue: false },
        viewed_profile_id: { type: DataTypes.INTEGER, defaultValue: null },
        resolved_profile_id: { type: DataTypes.INTEGER, defaultValue: null },


    }, {
        sequelize,
        modelName: 'Requests',
        underscored: true

    })
    return Requests
}