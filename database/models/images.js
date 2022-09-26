'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Images extends Model { }
    Images.init({
        url: { type: DataTypes.STRING },
        commerce_id: { type: DataTypes.INTEGER, defaultValue: null },
        site_id: { type: DataTypes.INTEGER, defaultValue: null  },
        route_id: { type: DataTypes.INTEGER, defaultValue: null  },

    }, {
        sequelize,
        modelName: 'Images',
        underscored: true

    })
    return Images
}