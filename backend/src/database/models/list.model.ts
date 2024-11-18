import { DataTypes } from 'sequelize';

import { sequelize } from '..';

const List = sequelize.define(
  'Lists',
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    board_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Boards',
        key: 'id',
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  },
);

export default List;
