import knex from "knex";
import dbConfig from "./config/knexfile";
import dotenv from "dotenv"
dotenv.config()

const env = process.env.NODE_ENV
const db = knex(dbConfig.env)

export default db;
