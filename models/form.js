'use strict';
module.exports = (sequelize, DataTypes) => {
  const form = sequelize.define('form', {
    id_analysis: DataTypes.INTEGER,
    q1: DataTypes.STRING,
    q2: DataTypes.STRING,
    q3: DataTypes.STRING,
    q4: DataTypes.STRING,
    q5: DataTypes.STRING,
    q6: DataTypes.STRING,
    q7: DataTypes.STRING,
    q8: DataTypes.STRING,
    q9: DataTypes.STRING,
    q10: DataTypes.STRING
  }, {});
  form.associate = function(models) {
    // associations can be defined here
  };
  return form;
};