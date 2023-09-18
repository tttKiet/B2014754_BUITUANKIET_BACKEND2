import app from "./app";

import config from "./src/app/config";

const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(`Server is running on port${PORT}`);
});
