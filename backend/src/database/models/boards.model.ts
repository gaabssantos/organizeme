import { DataTypes } from 'sequelize';

import { sequelize } from '..';

const Board = sequelize.define(
  'Boards',
  {
    id_user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  },
);

export default Board;
