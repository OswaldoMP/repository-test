'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('analyses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_client: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'clients',
                    key: 'id'
                }
            },
            id_user: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'doctors',
                    key: 'id'
                }
            },
            img: {
                type: Sequelize.STRING
            },
            color: {
                type: Sequelize.STRING
            },
            size: {
                type: Sequelize.FLOAT
            },
            maligno: {
                type: Sequelize.BOOLEAN
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
        return queryInterface.dropTable('analyses');
    }
};