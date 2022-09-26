'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Routes extends Model { }
    Routes.init({

        name: { type: DataTypes.STRING },
        category: { type: DataTypes.STRING },
        description: { type: DataTypes.TEXT, defaultValue:'' },
        map: { type: DataTypes.STRING, defaultValue:'' }

    }, {
        sequelize,
        modelName: 'Routes',
        underscored: true

    })
    return Routes
}