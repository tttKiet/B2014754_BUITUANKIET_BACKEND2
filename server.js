import app from "./app.js";
import config from "./src/app/config/index.js";
import MongoDB from "./src/app/utils/mongodb.util.js";

async function startServer() {
  try {
    await MongoDB.connect(config.db.uri);
    console.log("Connected to the database!");

    const PORT = config.app.port;
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log("Cannot connect to the database!", err);
    process.exit();
  }
}

startServer();
