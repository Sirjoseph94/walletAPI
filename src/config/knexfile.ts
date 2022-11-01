import type { Knex } from "knex";
import dotenv from "dotenv";
dotenv.config()

const {DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME} = process.env

const dbConfig: { [key: string]: Knex.Config } = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "mysql",
    connection: {
      host : DB_HOST,
      port : DB_PORT as unknown as number,
      user : DB_USER,
      password : DB_PASSWORD,
      database : DB_NAME
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

export default dbConfig;
