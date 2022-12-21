import * as dotenv from 'dotenv';
import { Dialect } from 'sequelize/types';
import { IDatabaseConfig } from './dbConfig.interfaces';

dotenv.config();

export const databaseConfig: IDatabaseConfig = {
    dev: {
        username: "root",
        password: "admin@123",
        database: "db_name",
        host: "localhost",
        port: 3306,
        dialect: "mysql",
    },
    stage: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME_TEST,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT as Dialect,
    },
    prod: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME_PRODUCTION,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT as Dialect,
    },
};