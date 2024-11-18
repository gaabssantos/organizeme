import { DataTypes } from 'sequelize';

import { sequelize } from '..';

const Card = sequelize.define(
  'Cards',
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    list_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Boards',
        key: 'id',
      },
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  },
);

export default Card;
