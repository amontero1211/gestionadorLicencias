import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { DataSourceOptions } from 'typeorm/data-source';

dotenv.config();

async function initializeDataSource() {
  const options = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../entities/**/*.entity.ts'],
    migrationsTableName: 'migrations',
    migrations: [__dirname + '/../migrations/**/*.ts'],
  };

  return new DataSource(options as DataSourceOptions & SeederOptions);
}
export const dataSourcePromise = initializeDataSource();
