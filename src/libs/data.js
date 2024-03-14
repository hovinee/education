import fs from "fs";
import path from "path";

const directory = path.join(process.cwd(), "src/data");

export function getData() {
  const fullPath = path.join(directory, "data.json");
  const fileContents = JSON.parse(fs.readFileSync(fullPath, "utf8"));
  let data;
  data = { ...fileContents };
  return { ...data };
}
