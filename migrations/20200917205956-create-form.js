'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('forms', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_analysis: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'analyses',
                    key: 'id'
                }
            },
            q1: {
                type: Sequelize.STRING
            },
            q2: {
                type: Sequelize.STRING
            },
            q3: {
                type: Sequelize.STRING
            },
            q4: {
                type: Sequelize.STRING
            },
            q5: {
                type: Sequelize.STRING
            },
            q6: {
                type: Sequelize.STRING
            },
            q7: {
                type: Sequelize.STRING
            },
            q8: {
                type: Sequelize.STRING
            },
            q9: {
                type: Sequelize.STRING
            },
            q10: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('forms');
    }
};