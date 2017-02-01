// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      user: 'postgres',
      host: '192.168.99.100',
      database: 'masa_db'
    },
    seeds: {
      directory: './seeds/'
    } 
  }
};
