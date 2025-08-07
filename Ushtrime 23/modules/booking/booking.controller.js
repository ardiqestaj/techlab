import Tour from "../tour/tour.model.js";
import Booking from "../booking/booking.model.js";

export const createBooking = async (req, res) => {
  try {
    const tourId = req.params.tourId;
    const userId = req.user._id;
    const { guests, startDate, endDate } = req.body;
    const tour = await Tour.findById(tourId);
    if (!tour) {
      return res.status(404).json({ messahe: "Tour not found" });
    }
    const startDateOnly = new Date(startDate.split("T")[0]);
    const endDateOnly = new Date(endDate.split("T")[0]);

    const diffTime = endDateOnly - startDateOnly;
    const diffDays = diffTime / (1000 * 60 * 60 * 24) + 1;

    const totalPrice = tour.price * guests * diffDays;
    const booking = new Booking({
      user: userId,
      tour: tourId,
      guests,
      totalPrice,
      startDate,
      endDate,
    });
    await booking.save();
    res.status(201).json({
      message: "booking created successfully",
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Server Error", error });
  }
};

export const getAllBookings = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const status = req.query.status;

  const filter = { isActive: true };
  if (req.user.role === "user") {
    filter.user = req.user._id;
    // { isActive: true, user: req.user._id}
  }

  if (status) {
    filter.status = status;
  }
  try {
    const bookings = await Booking.find(filter)
      .populate("user", "firstName lastName")
      .populate("tour", "title")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    const totalDocuments = await Booking.countDocuments(filter);

    res.status(200).json({
      length: bookings.length,
      totalDocuments: totalDocuments,
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const status = req.body.status;
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: "Tour not found" });
    }
    if (status && (status === "paid" || status === "canceled")) {
      booking.status = status;
    } else {
      res.status(400).json({ message: "status is required" });
    }
    await booking.save();
    res.status(201).json({ message: "Status updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const cancelMyBooking = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const status = req.body.status;
    const booking = await Booking.findOne({
      _id: bookingId,
      user: req.user._id,
    });
    if (!booking) {
      return res.status(404).json({ message: "Tour not found" });
    }
    if (status && status === "canceled") {
      booking.status = status;
    } else {
      res.status(400).json({ message: "status is required" });
    }
    await booking.save();
    res.status(201).json({ message: "Status updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteBooking = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    await Booking.findByIdAndUpdate(bookingId, { isActive: false });
    res.status(200).json({ message: "Booking Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" }, error);
  }
};
