'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Events extends Model { }
    Events.init({

        name: { type: DataTypes.STRING },
        description: { type: DataTypes.TEXT, defaultValue: '' },
        date: { type: DataTypes.DATE },
        start: { type: DataTypes.TIME },
        end: { type: DataTypes.TIME },
        office: { type: DataTypes.STRING }

    }, {
        sequelize,
        modelName: 'Events',
        underscored: true

    })
    return Events
}