const dotenv = require("dotenv");

dotenv.config();
module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: ["src/app/models/**/*.ts", "dist/app/models/**/*.js"],
  migrations: [
    "src/database/migrations/**/*.ts",
    "dist/database/migrations/**/*.js",
  ],
  subscribers: ["src/app/subscribers/**/*.ts", "dist/app/subscribers/**/*.js"],
  cli: {
    entitiesDir: "src/app/models",
    migrationsDir: "src/database/migrations",
    subscribersDir: "src/subscribers",
  },
};
