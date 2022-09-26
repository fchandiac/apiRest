'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Sites extends Model { }
    Sites.init({

        name: { type: DataTypes.STRING },
        category: { type: DataTypes.STRING },
        description: { type: DataTypes.TEXT, defaultValue:'' },
        map: { type: DataTypes.STRING, defaultValue:'' }

    }, {
        sequelize,
        modelName: 'Sites',
        underscored: true

    })
    return Sites
}