'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Reviews extends Model { }
    Reviews.init({
        value: { type: DataTypes.INTEGER },
        comment: { type: DataTypes.TEXT },
        user_id: { type: DataTypes.INTEGER },
        profile_id: { type: DataTypes.INTEGER }
    }, {
        sequelize,
        modelName: 'Reviews',
        underscored: true

    })
    return Reviews
}