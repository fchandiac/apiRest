'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Socialnetworks extends Model { }
    Socialnetworks.init({
        app: { type: DataTypes.STRING },
        rrss: { type: DataTypes.STRING },
        url: { type: DataTypes.STRING },

    }, {
        sequelize,
        modelName: 'Socialnetworks',
        underscored: true

    })
    return Socialnetworks
}