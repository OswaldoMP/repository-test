'use strict';
module.exports = (sequelize, DataTypes) => {
    const analysis = sequelize.define('analysis', {
        id_client: DataTypes.INTEGER,
        id_user: DataTypes.INTEGER,
        img: DataTypes.STRING,
        color: DataTypes.STRING,
        size: DataTypes.FLOAT,
        maligno: DataTypes.BOOLEAN
    }, {});
    analysis.associate = function(models) {
        // associations can be defined here
        analysis.belongsTo(models.doctor, {
            foreignKey: 'id_user',
            sourceKey: 'id'
        });

        analysis.belongsTo(models.client, {
            foreignKey: 'id_client',
            sourceKey: 'id'
        });

        analysis.hasOne(models.form, {
            foreignKey: 'id_analysis',
            sourceKey: 'id'
        });
    };
    return analysis;
};