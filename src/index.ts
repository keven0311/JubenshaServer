import { add } from "./utils";
import sequelize from "./database/db-connection";
import Juben from "./models/Juben";

(async () => {
  // clearing all sample data in dev environment: { force: true }
  await sequelize.sync({ force: true });

  console.log("sum", add(1, 3));
})();
