'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Trainings extends Model { }
    Trainings.init({
        name: { type: DataTypes.STRING },
        state: { type: DataTypes.BOOLEAN },
        mode: { type: DataTypes.STRING },
        totalhours: { type: DataTypes.INTEGER },
        dayhours: { type: DataTypes.INTEGER },
        start: { type: DataTypes.DATE },
        end: { type: DataTypes.DATE },
        benefits: { type: DataTypes.STRING },
        schedule: { type: DataTypes.STRING },
        requirements: { type: DataTypes.STRING },
        dni: { type: DataTypes.BOOLEAN },
        rsh: { type: DataTypes.BOOLEAN },
        ce: { type: DataTypes.BOOLEAN },
    }, {
        sequelize,
        modelName: 'Trainings',
        underscored: true

    })
    return Trainings
}