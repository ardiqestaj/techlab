import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../modules/user/user.model.js";

dotenv.config();
const secretKey = process.env.SECRET_KEY;

export const isAuthnticated = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Acces, denied, no token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decode = jwt.verify(token, secretKey);
    console.log(decode, "decode");
    const user = await User.findById(decode.id);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export const authorize = (roles) => {
  return (req, res, next) => {
    console.log(req.user, "useri i bome login");
    if (!req.user) {
      return res
        .status(401)
        .json({ message: "Access denied, insufficient permission" });
    }
    if (roles && !roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Access denied, insufficient permission" });
    }
    next();
  };
};
