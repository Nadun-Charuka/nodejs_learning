import path from "node:path";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

readFile(path.join(__dirname, "myname.txt"), (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
