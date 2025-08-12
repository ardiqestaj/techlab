import Tour from "../tour/tour.model.js";
import Booking from "../booking/booking.model.js";
import booking from "../booking/booking.model.js";

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

export const updateBooking = async (req, res) => {
  try {
    const bookingId = req.params.bookingId;
    const { guests, startDate, endDate } = req.body;
    const booking = await Booking.findOne({
      _id: bookingId,
      isActive: true,
      status: "pending",
    });

    if (!booking) {
      return res.status(200).json({
        message:
          "Booking not found or you are you can't edit from status paid or canceled",
      });
    }
    const tour = await Tour.findById(booking.tour);
    if (guests) {
      booking.guests = guests;
    }

    if (startDate) {
      booking.startDate = startDate;
    }

    if (endDate) {
      booking.endDate = endDate;
    }
    console.log(booking, "bokingguuu");

    const startDateOnly = new Date(
      booking.startDate.toISOString().split("T")[0]
    );
    const endDateOnly = new Date(booking.endDate.toISOString().split("T")[0]);
    // TODO: Dont forget to check this:
    const diffDays =
      (startDateOnly.getTime() - endDateOnly.getTime()) /
        (1000 * 60 * 60 * 24) +
      1;
    console.log(diffDays, "diffDays");
    const totalPrice = tour.price * booking.guests * Math.floor(diffDays);
    console.log(totalPrice, "totalPrice");
    booking.totalPrice = totalPrice;
    await booking.save();
    res.status(200).json({ message: "Booking Updated Succesfully", tour });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getBookingStats = async (req, res) => {
  try {
    const totalBookings = await Booking.countDocuments({ isActive: true });

    const paidBookings = await Booking.countDocuments({
      isActive: true,
      status: "paid",
    });

    const pendingBookings = await Booking.countDocuments({
      isActive: true,
      status: "pending",
    });

    const canceledBookings = await Booking.countDocuments({
      isActive: true,
      status: "canceled",
    });

    const revenueResults = await Booking.aggregate([
      { $match: { isActive: true, status: "paid" } },
      { $group: { _id: null, totalRevenue: { $sum: "$totalPrice" } } },
    ]);

    const totalRevenue =
      revenueResults.length > 0 ? revenueResults[0].totalRevenue : 0;

    const guestsResults = await Booking.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: null, totalGuests: { $sum: "$guests" } } },
    ]);

    const totalGuests =
      guestsResults.length > 0 ? guestsResults[0].totalGuests : 0;

    const avgPriceResults = await Booking.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: null, averagePrice: { $avg: "$totalPrice" } } },
    ]);
    const avgPrice =
      avgPriceResults.length > 0 ? avgPriceResults[0].averagePrice : 0;

    const startOfMonth = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      1
    );

    const thisMonthBookings = await Booking.countDocuments({
      isActive: true,
      createdAt: { $gte: startOfMonth },
    });

    res.status(200).json({
      message: "Booking Statistics",
      stats: {
        totalBookings,
        bookingByStatus: {
          paidBookings,
          pendingBookings,
          canceledBookings,
        },
        totalRevenue,
        totalGuests,
        avgPrice,
        thisMonthBookings,
      },
    });
  } catch (error) {
    console.log(error, "error");
    res.status(500).json({ message: "Server Error" });
  }
};
