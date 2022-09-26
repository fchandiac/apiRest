'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Users extends Model { }
    Users.init({
        rut: { type: DataTypes.STRING },
        name: { type: DataTypes.STRING },
        gender: { type: DataTypes.STRING },
        born: { type: DataTypes.DATE },
        phone: { type: DataTypes.STRING },
        mail: { type: DataTypes.STRING },
        address: { type: DataTypes.STRING },
        turismo: { type: DataTypes.BOOLEAN },
        omil: { type: DataTypes.BOOLEAN },
        fomento: { type: DataTypes.BOOLEAN },
        academia: { type: DataTypes.BOOLEAN },
        joven: { type: DataTypes.BOOLEAN }


    }, {
        sequelize,
        modelName: 'Users',
        underscored: true

    })
    return Users
}