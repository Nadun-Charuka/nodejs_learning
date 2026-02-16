import path from "node:path";
import { fileURLToPath } from "node:url";
import { readFile, writeFile } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function readAFile(pathName) {
  try {
    const filePath = path.join(__dirname, pathName);
    console.log(filePath);
    const data = await readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.log(error);
  }
}

console.log(__dirname);
readAFile("../readfile.txt");
