module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cerf8014rebf1ecvchf0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_k60e'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '3uPHSr8GRPyP4cGOIO8eywgyve4j6dsx'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
