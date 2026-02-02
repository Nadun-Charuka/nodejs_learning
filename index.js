// const os = require("os");
// const path = require("path");

import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "url";
import { math } from "./myfunction.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(os.platform());
console.log(os.version());
console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(math({ n1: 10, n2: 20, n4: 50 }));
