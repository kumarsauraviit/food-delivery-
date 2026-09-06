import { app } from "./app.js";
import { env } from "@project/shared-types";
async function start() {
  app.listen(env.port, () => {
    console.log(`Product service running on port ${env.port}`);
  });
}

start();
