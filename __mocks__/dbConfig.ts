export const dbConfig = {
  type: "postgres",
  host: "db",
  port: 5432,
  username: "user",
  password: "pw123",
  database: "database",
  entities: ["entities/path/of/mock"],
  keepConnectionAlive: true,
  synchronize: false,
  // Log queries which take longer than 1s
  maxQueryExecutionTime: 1000,
};
