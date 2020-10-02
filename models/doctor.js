'use strict';
module.exports = (sequelize, DataTypes) => {
    const doctor = sequelize.define('doctor', {
        name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        timestamps: false,
        tableName: 'doctors'
    });
    doctor.associate = function(models) {
        // associations can be defined here
        doctor.hasMany(models.analysis, {
            as: 'analylises',
            foreignKey: 'id_user',
            sourceKey: 'id'
        });
    };
    return doctor;
};