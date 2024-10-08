import { Sequelize } from "sequelize-typescript";
import config from "../config";
import Juben from "../models/Juben";
import path from "path";

const sequelize = new Sequelize({
  ...config.getDatabaseConfig(),
  dialect: "postgres",
  models: [path.join(__dirname, "..", "models")],
  //   models: [Juben],
  logging: console.log,
});

export default sequelize;
