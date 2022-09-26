'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Laboraloffers extends Model { }
    Laboraloffers.init({

        name: { type: DataTypes.STRING },
        state: { type: DataTypes.BOOLEAN, defaultValue: false },
        quota: { type: DataTypes.INTEGER },
        description: { type: DataTypes.TEXT, defaultValue: '' },
        postulation: { type: DataTypes.TEXT, defaultValue: '' }


    }, {
        sequelize,
        modelName: 'Laboraloffers',
        underscored: true

    })
    return Laboraloffers
}