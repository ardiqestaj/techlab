import { generateNewId, readData, writeData } from "../utils.js";

export const getAllDestinations = (req, res) => {
  const name = req.query.name;
  const country = req.query.country;
  const best_season = req.query.bestSeason;
  console.log(req.query);
  try {
    let destination = readData();
    if (name) {
      destination = destination.filter((item) =>
        String(item.name).toLowerCase().includes(String(name).toLowerCase())
      );
    }
    if (country) {
      destination = destination.filter((item) =>
        String(item.country)
          .toLowerCase()
          .includes(String(country).toLowerCase())
      );
    }
    if (best_season) {
      destination = destination.filter((item) =>
        String(item.best_season)
          .toLowerCase()
          .includes(String(best_season).toLowerCase())
      );
    }

    res.json(destination);
  } catch (error) {
    console.log(error);
  }
};

export const getMostAttractons = (req, res) => {
  try {
    const destinations = readData();
    const destination = destinations.reduce((max, current) => {
      return current.attractions.length > max.attractions.length
        ? current
        : max;
    }, destinations[0]);
    res.json(destination);
  } catch (error) {
    console.log("error", error);
  }
};

export const getTotalVistorCount = (req, res) => {
  try {
    const destinations = readData();
    const total = destinations.reduce((sum, item) => sum + item.visitors, 0);
  } catch (error) {
    console.log("error", error);
  }

  res.json({ totalVisitors: total });
};

export const getDestinationById = (req, res) => {
  console.log("first");
  const destinations = readData();
  const id = Number(req.params.id);
  const destination = destinations.find((d) => d.id === id);
  if (!destination) {
    return res.status(404).json({ message: "Destination not found" });
  }
  res.json({
    name: destination.name,
    price: destination.average_cost,
    attractionsCount: destination.attractions.length,
  });
};

export const createDestination = (req, res) => {
  const destinations = readData();
  const newId = generateNewId(destinations);
  const { name, country } = req.body;
  const newDestination = {
    id: newId,
    ...req.body,
  };

  destinations.push(newDestination);
  const success = writeData(destinations);
  if (success) {
    res.status(201).json(newDestination);
  } else {
    res.status(500).json({ message: "Error saving data" });
  }
};

export const updateDestiantion = (req, res) => {
  const allDestination = readData();
  const id = Number(req.params.id);
  const index = allDestination.findIndex((dest) => dest.id === id);
  const destination = allDestination[index];

  if (req.body.name !== undefined) {
    destination.name = req.body.name;
  }
  if (req.body.country !== undefined) {
    destination.country = req.body.country;
  }
  const success = writeData(allDestination);
  if (success) {
    res.status(201).json(destination);
  } else {
    res.status(500).json({ message: "Error saving data" });
  }
};

export const deleteDestination = (req, res) => {
  const destinations = readData();
  const id = Number(req.params.id);
  const index = destinations.findIndex((d) => d.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Destination not found" });
  }
  const deleteDestination = destinations.splice(index, 1)[0];
  const success = writeData(destinations);
  if (success) {
    res.status(200).json(deleteDestination);
  } else {
    res.status(500).json({ message: "Error saving data" });
  }
};
