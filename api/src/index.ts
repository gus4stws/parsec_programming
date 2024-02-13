import Hapi from '@hapi/hapi';
import { makeDb, startDatabase } from './database';
import dotenv from 'dotenv';
import { Model } from 'objection';
import knex, { Knex } from 'knex';

const init = async () => {
  dotenv.config();
  const db = makeDb();

  Model.knex(db);

  const server = Hapi.server({
    port: 4000,
    host: 'localhost'
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (_request, _h) => {
      return 'Hello Worldawdaawdwadwawdwadawd!';
    }
  });

  server.route({
    method: 'GET',
    path: '/tasks',
    handler: async (r, h) => {
    } 
  })

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
startDatabase();