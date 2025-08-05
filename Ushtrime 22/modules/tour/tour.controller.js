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
    } = req.body;

    const image = req.file ? req.file.path : null;

    console.log(image, "imageee");
    const userID = req.user._id;

    const tour = new Tour({
      title,
      description,
      location,
      country,
      city,
      price,
      averageReating,
      createdBy: userID,
      image,
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
    const { search, country, city, sortBy } = req.query;

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const filter = { isActive: true };

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
    }

    if (country) {
      filter.country = country;
    }
    if (city) {
      filter.city = city;
    }

    let sortOptions = { createdAt: -1 };
    if (sortBy === "price") {
      sortOptions = { price: 1 };
    } else if (sortBy === "price-desc") {
      sortOptions = { price: -1 };
    }

    const tours = await Tour.find(filter)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit);

    const totalDocuments = await Tour.countDocuments(filter);

    res.status(200).json({
      length: tours.length,
      totalDocuments: totalDocuments,
      data: tours,
    });
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

export const updateTour = async (req, res) => {
  try {
    const tourId = req.params.id;
    const { title, description, location, country, city, price } = req.body;
    const tour = await Tour.findById(tourId);
    if (!tour) {
      return res.status(404).json({ message: "Tour not found" });
    }

    if (title) {
      tour.title = title;
    }
    if (description) {
      tour.description = description;
    }
    if (location) {
      tour.location = location;
    }
    if (country) {
      tour.country = country;
    }
    if (city) {
      tour.city = city;
    }
    if (price) {
      tour.price = price;
    }
    await tour.save();
    res.status(200).json({ message: "Tour Updated Succesfully", tour });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getTourstats = async (req, res) => {
  try {
    const totalTour = await Tour.countDocuments({ isActive: true });
    const priceStats = await Tour.aggregate([
      { $match: { isActive: true } },
      {
        $group: {
          _id: null,
          avgPrice: { $avg: "$price" },
          minPrice: { $min: "$price" },
          maxPrice: { $max: "$price" },
          totalRevenue: { $sum: "$price" },
        },
      },
    ]);
    const toursByCountry = await Tour.aggregate([
      { $match: { isActive: true } },
      {
        $group: {
          _id: "$country",
          count: { $sum: 1 },
          avgPrice: { $avg: "$price" },
        },
      },
    ]);

    const ratingStats = await Tour.aggregate([
      { $match: { isActive: true } },
      {
        $group: {
          _id: null,
          avgRating: { $avg: "$averageReating" },
          minRating: { $min: "$averageReating" },
          maxRating: { $max: "$averageReating" },
        },
      },
    ]);

    res.status(200).json({
      totalTour: totalTour,
      priceStats: priceStats[0] || {
        avgPrice: 0,
        minPrice: 0,
        maxPrice: 0,
        totalRevenu: 0,
      },
      ratingStats: ratingStats[0] || {
        avgRating: 0,
        minRating: 0,
        maxRating: 0,
      },
      toursByCountry: toursByCountry,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error", error });
  }
};

export const addReview = async (req, res) => {
  try {
    const tourId = req.params.tourId;
    const user = req.user._id;
    const comment = req.body.comment;
    const rating = req.body.rating;

    const tour = await Tour.findById(tourId);
    if (!tour) {
      return res.status(404).json({ message: "Tour not found" });
    }

    const existingReview = tour.reviews.find(
      (rev) => rev.user.toString() === user
    );
    if (existingReview) {
      return res
        .status(400)
        .json({ message: "you ahve already revied this tour" });
    }

    const newReview = {
      user: user,
      comment: comment,
      rating: rating,
    };
    tour.reviews.push(newReview);
    const totalRating = tour.reviews.reduce((acc, rev) => acc + rev.rating, 0);
    tour.averageReating = totalRating / tour.reviews.length;
    await tour.save();
    res.status(201).json({ message: "Review Added successfully", tour });
  } catch (error) {
    res.statu(500).json({ message: "Server Error", error });
  }
};
