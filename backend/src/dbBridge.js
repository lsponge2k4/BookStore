import { createRequire } from "module";
const require = createRequire(import.meta.url);

const db = require("./models/index.cjs");

export default db;
