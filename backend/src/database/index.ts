import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  process.env.POSTGRES_DATABASE as string,
  process.env.POSTGRES_USERNAME as string,
  process.env.POSTGRES_PASSWORD as string,
  {
    host: process.env.POSTGRES_HOST as string,
    dialect: 'postgres',
  },
);

const setupDatabase = async () => {
  try {
    await sequelize.authenticate();

    console.log('✔ Connection has been established successfully.');
  } catch (err) {
    console.error('❌ Unable to connect the database, error: ', err);
  }
};

export default setupDatabase;
