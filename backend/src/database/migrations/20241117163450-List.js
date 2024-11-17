'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Lists', {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      board_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Boards',
          key: 'id',
        },
      },
      cards: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Lists', null, {});
  },
};
