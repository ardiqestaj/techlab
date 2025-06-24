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
