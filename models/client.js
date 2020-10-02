'use strict';
module.exports = (sequelize, DataTypes) => {
    const client = sequelize.define('client', {
        name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        age: DataTypes.INTEGER
    }, {});
    client.associate = function(models) {
        // associations can be defined here
        client.hasMany(models.analysis, {
            foreignKey: 'id_client',
            sourceKey: 'id'
        });
    };
    return client;
};