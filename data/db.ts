if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

import knex from 'knex';

const ssl = process.env.EXAMPLE_DATABASE_HOST === '127.0.0.1' ? false : true;

const DB = knex({
  client: 'pg',
  connection: {
    ssl: ssl,
    port: Number(process.env.DATABASE_PORT),
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  },
});

export default DB;
