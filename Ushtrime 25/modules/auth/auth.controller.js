import dotenv from "dotenv";
import User from "../user/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
dotenv.config();

const secretKey = process.env.SECRET_KEY;

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // const email = req.body.email
    // const password = req.boddy.password
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credencials" });
    }
    console.log(password, "password");
    console.log(user.password, "hash password");

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credencials" });
    }

    const payload = {
      id: user._id,
      role: user.role,
    };

    const token = jwt.sign(payload, secretKey, { expiresIn: "8h" });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
