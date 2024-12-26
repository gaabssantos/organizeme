import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'postgresql://postgres:rOJsYUkSCPgTHKJhWzHMfJztFtYyWldn@junction.proxy.rlwy.net:39606/railway',
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
