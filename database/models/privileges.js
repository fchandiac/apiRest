'use strict';
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Privileges extends Model { }
    Privileges.init({
        
        name: { type: DataTypes.STRING },
        admin: { type: DataTypes.BOOLEAN, defaultValue: false },
        emprende: { type: DataTypes.BOOLEAN, defaultValue: false  },
        turismo: { type: DataTypes.BOOLEAN, defaultValue: false  },
        omil: { type: DataTypes.BOOLEAN, defaultValue: false  },
        fomento: { type: DataTypes.BOOLEAN, defaultValue: false  },
        academia: { type: DataTypes.BOOLEAN, defaultValue: false  },
        joven: { type: DataTypes.BOOLEAN, defaultValue: false  }

    }, {
        sequelize,
        modelName: 'Privileges',
        underscored: true

    })
    return Privileges
}