import User from "./user.model.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = req.body.password;
    const phoneNumber = req.body.phoneNumber;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    await user.save();
    // send wellcome email
    res.status(201).json(user);
  } catch (error) {
    console.log(error, "error");
    res.status(400).json({ message: error });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    res.status(200).json({
      length: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ mesage: "Server Error", error: error });
  }
};

export const getOneUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ mesage: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const updateUser = async (req, res) => {
  try {
    // const { id } = req.params;
    const userId = req.params.id;

    const { firstName, lastName, email, phoneNumber } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ mesage: "User not found" });
    }
    if (firstName) {
      user.firstName = firstName;
    }
    if (lastName) {
      user.lastName = lastName;
    }
    if (email) {
      user.email = email;
    }
    if (phoneNumber) {
      user.phoneNumber = phoneNumber;
    }
    await user.save();
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.status(200).json({ meaage: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
