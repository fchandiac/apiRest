'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Attentions extends Model { }
    Attentions.init({
        description: { type: DataTypes.TEXT },
        office: { type: DataTypes.STRING },
        project: { type: DataTypes.BOOLEAN },
        projectname: { type: DataTypes.STRING },
        user_id: { type: DataTypes.INTEGER },
        profile_id: { type: DataTypes.INTEGER }
    }, {
        sequelize,
        modelName: 'Attentions',
        underscored: true

    })
    return Attentions
}