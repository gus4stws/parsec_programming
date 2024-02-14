import Hapi from '@hapi/hapi';
import { makeDb, startDatabase } from './database';
import dotenv from 'dotenv';
import { Model } from 'objection';

const init = async () => {
  dotenv.config();
  const db = makeDb();

  Model.knex(db);

  const server = Hapi.server({
    port: 4000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (_request, _h) => {
      return 'Hello World!';
    }
  });

  server.route({
    method: 'GET',
    path: '/tasks',
    handler: async (r, h) => {
      try {
        const {rows} = await db.raw('select * from tasks');
        h.response(rows).code(200)
      } catch (error) {
        console.error(error);
        h.response().code(500)        
      }
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