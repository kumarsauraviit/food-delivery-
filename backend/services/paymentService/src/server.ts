import app from "./app.js";
import { env } from './config/env.js';
async function start() {

    app.listen(env.port, () => {
        console.log(`Product service running on port ${env.port}`);
    });
}

start();
