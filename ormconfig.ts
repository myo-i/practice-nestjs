import { DataSource, DataSourceOptions } from 'typeorm'

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    synchronize: false,
    // コンパイル済みのフォルダを指定する必要があるためdistディレクトリの.jsを指定する必要がある
    entities: ['dist/entites/*.entity{.ts,.js}'],
    migrations: ['dist/migrations/*.js'],
    logging: false
  };

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;