export const dbConfig = {
  type: "postgres",
  host: "db",
  port: 5432,
  username: "user",
  password: "pw123",
  database: "database",
  entities: ["entity/path/of/dbConfig"],
  synchronize: false,
  // Log queries which take longer than 1s
  maxQueryExecutionTime: 1000,
};
