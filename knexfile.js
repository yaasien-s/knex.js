// Update with your config settings.
const db = require('./config/creds')

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'knexjs_tutorial',
      user:   db.USER,
      password: db.PASSWORD,
      host: 'localhost',
      port: db.PORT
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};
