const config = {
  db: {
    type: "mysql" as "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "pys5660789",
    database: "post",
    entities: [__dirname + "/entity/*.entity{.ts,.js}"],
    synchronize: true,
    logging: true
  }
}
export const appConfig = config;