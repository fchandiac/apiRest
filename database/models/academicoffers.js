'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Academicoffers extends Model { }
    Academicoffers.init({

        name: { type: DataTypes.STRING },
        type: { type: DataTypes.STRING },
        description: { type: DataTypes.TEXT, defaultValue: '' },
        mode: { type: DataTypes.STRING },
        quota: { type: DataTypes.INTEGER },
        start: { type: DataTypes.DATE },
        end: { type: DataTypes.DATE },
        place: { type: DataTypes.STRING },
        inscription: { type: DataTypes.BOOLEAN, defaultValue: false },


    }, {
    sequelize,
    modelName: 'Academicoffers',
    underscored: true

})
return Academicoffers
}