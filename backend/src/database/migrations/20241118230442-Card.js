'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('Cards', {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      list_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Lists',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Cards');
  },
};
