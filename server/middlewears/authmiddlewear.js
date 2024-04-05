import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
export const isAuth = async (req, res, next) => {
  const authorizationtoken = req.headers.authorization;
  if (!authorizationtoken) {
    return res.status(401).json({ message: "Token not found" });
  }
  const token = authorizationtoken.replace("token ", "");
  const user = await jwt.verify(token, process.env.JWT_SECRET);
  const verifyuser = await User.findById(user._id).select("-password");
  req.user = verifyuser;
  next();
};
