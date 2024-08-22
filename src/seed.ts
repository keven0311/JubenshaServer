import sequelize from "./database/db-connection";
import Juben from "./models/Juben";

const seed = async () => {
  try {
    console.log("Syncing database...");
    await sequelize.sync({ force: true });
    console.log("Database synced.");

    console.log("Createing sample data...");
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

    console.log("Sample data created: ", sampleJuben.toJSON());
  } catch (err) {
    console.error(err);
  }
};

async function runSeed() {
  try {
    await seed();
    console.log("Seeding success!");
  } catch (err) {
    console.error("Erroring when seeding!", err);
  } finally {
    sequelize.close();
  }
}

runSeed();
