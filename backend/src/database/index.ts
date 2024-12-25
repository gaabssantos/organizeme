import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'postgresql://postgres:organizemepostgres@db.zzufbojwhkhntonfgsxc.supabase.co:5432/organizeme',
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
