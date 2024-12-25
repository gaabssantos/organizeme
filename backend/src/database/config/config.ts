import 'dotenv/config';

const config = {
  username: process.env.POSTGRES_USERNAME as string,
  password: process.env.POSTGRES_PASSWORD as string,
  database: process.env.POSTGRES_DATABASE as string,
  host: process.env.POSTGRES_HOST as string,
  dialect: 'postgres',
};

export default {
  development: config,
  test: config,
  production: config,
};
