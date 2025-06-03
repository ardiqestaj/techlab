import fs from "fs";

export function readData() {
  try {
    const data = fs.readFileSync("data.json", "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data:", error);
    return { students: [] };
  }
}

export function writeData(data) {
  try {
    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error("Error writing data:", error);
    return false;
  }
}

export function getNextId() {
  const data = readData();
  if (data.students.length === 0) {
    return 1;
  }

  const maxId = Math.max(...data.students.map((student) => student.id));
  return maxId + 1;
}
