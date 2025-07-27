import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.SECRET_KEY;

export const isAuthnticated = (req, res, next) => {
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
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
