import User from "./user.model.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  console.log("po bonnn");
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
