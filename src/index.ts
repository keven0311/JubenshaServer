import { add } from "./utils";
import sequelize from "./database/db-connection";
import Juben from "./models/Juben";

(async () => {
  // clearing all sample data in dev environment: { force: true }
  await sequelize.sync({ force: true });
  const sampleJuben = await Juben.create({
    title: "Mystery of the Ancient Tomb",
    price: 500,
    player_type: "4men2women",
    difficulty: "intermediate",
    mod: "default",
    description:
      "A thrilling adventure into the depths of an ancient tomb, filled with puzzles and danger.",
    summary:
      "Join a team of archaeologists on a mission to uncover the secrets of an ancient civilization.",
    num_players: [6],
    theme: ["adventure", "mystery"],
    category: ["puzzle", "exploration"],
    background: ["archaeology", "ancient civilization"],
    thumbnail: ["thumb1.jpg", "thumb2.jpg"],
  });

  console.log("sum", add(1, 3));
})();
