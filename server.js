import app from "./app.js";
import config from "./src/app/config/index.js";

const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
