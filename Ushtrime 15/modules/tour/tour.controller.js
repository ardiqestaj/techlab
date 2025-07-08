import Tour from "./tour.model.js";

export const createTour = async (req, res) => {
  try {
    // const title = req.body.title
    // console.log("ne rregull");
    const {
      title,
      description,
      location,
      country,
      city,
      price,
      averageReating,
      createdBy,
    } = req.body;

    const tour = new Tour({
      title,
      description,
      location,
      country,
      city,
      price,
      averageReating,
      createdBy,
    });
    await tour.save();
    res.status(201).json({ message: "Tour created", tour });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error creating Tour", error });
  }
};

export const getTours = async (req, res) => {
  try {
    const tours = await Tour.find({ isActive: true }).sort({
      createdAt: -1,
    });
    res.status(200).json(tours);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", error });
  }
};

export const getOneTour = async (req, res) => {
  try {
    const tourId = req.params.id;
    const tour = await Tour.findById(tourId).populate(
      "createdBy",
      "firstName lastName"
    );
    res.status(200).json(tour);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const deleteTour = async (req, res) => {
  try {
    const tourId = req.params.id;
    await Tour.findByIdAndUpdate(tourId, { isActive: false });
    res.status(200).json({ message: "Tour Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" }, error);
  }
};
