import fs from "fs";

export const readData = () => {
  try {
    const data = fs.readFileSync("./data.json", "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const writeData = (data) => {
  try {
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    return false;
    console.error("Error writing data:", error);
  }
};

export const generateNewId = (data) => {
  if (data.length === 0) {
    return 1;
  }
  let maxId = 0;

  for (let item of data) {
    if (item.id > maxId) {
      maxId = item.id;
    }
  }
  return maxId + 1;

  // Math.max(...data.map((item) => item.id))
};
