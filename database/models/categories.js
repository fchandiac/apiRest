'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Categories extends Model { }
    Categories.init({
        name: { type: DataTypes.STRING },
        turismo: { type: DataTypes.BOOLEAN },
        emprende: { type: DataTypes.BOOLEAN }
    }, {
        sequelize,
        modelName: 'Categories',
        underscored: true

    })
    return Categories
}