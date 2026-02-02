import path from "node:path";
import { fileURLToPath } from "node:url";
import { readFile, writeFile } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);
console.log(__dirname);

async function readMyFile() {
  try {
    const filePath = path.join(__dirname, "myname.txt");
    const data = await readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.log(error);
  }
}

async function writeMyFile() {
  try {
    const filePath = path.join(__dirname, "myname.txt");
    await writeFile(filePath, "\nhii oyaa monawada ketuweee", { flag: "a" });
  } catch (error) {
    console.log("Write failed:", error);
  }
}

console.log("--- Start ---");
await readMyFile();
await writeMyFile();
console.log("--- wrote ---");
await readMyFile();
console.log("--- End ---");
