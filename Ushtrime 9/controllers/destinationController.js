import { readData } from "../utils.js";

export const getAllDestinations = (req, res) => {
  const name = req.query.name;
  console.log(req.query);
  try {
    let destination = readData();
    destination = destination.filter((item) =>
      String(item.name).toLowerCase().includes(String(name).toLowerCase())
    );
    res.json(destination);
  } catch (error) {
    console.log(error);
  }
};
