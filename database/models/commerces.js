'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Commerces extends Model { }
    Commerces.init({
        rut: { type: DataTypes.STRING},
        name: { type: DataTypes.STRING},
        phone: { type: DataTypes.STRING, defaultValue:'' },
        mail: { type: DataTypes.STRING, defaultValue:'' },
        address: { type: DataTypes.STRING,defaultValue:'' },
        formalization : { type: DataTypes.BOOLEAN },
        sii: { type: DataTypes.STRING, defaultValue:'' },
        description: { type: DataTypes.TEXT, defaultValue:'' },
        whatsapp: { type: DataTypes.STRING, defaultValue:'' },
        instagram: { type: DataTypes.STRING, defaultValue:'' },
        facebook: { type: DataTypes.STRING, defaultValue:'' },
        map: { type: DataTypes.TEXT, defaultValue:'' },
        latitude: { type: DataTypes.STRING, defaultValue:'' },
        length: { type: DataTypes.STRING, defaultValue:'' },
        emprende : { type: DataTypes.BOOLEAN },
        emprende_pos : { type: DataTypes.INTEGER },
        turismo : { type: DataTypes.BOOLEAN },
        turismo_pos : { type: DataTypes.INTEGER },
        user_id: { type: DataTypes.INTEGER },
        category_id: { type: DataTypes.INTEGER }
    }, {
        sequelize,
        modelName: 'Commerces',
        underscored: true

    })
    return Commerces
}