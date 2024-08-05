import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; //jwt is the name of cookie
    // console.log("token is : ",token)
    if (!token) {
      console.log("no token provided");
      res.status(401).json({ error: "unauthorize or no token provided" });
    } //user is not logged in
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    // console.log("decoded in middleware:",decoded)
    if (!decoded) res.status(401).json({ error: "unauthorized-invalid token" });
    const user = await User.findById(decoded.userId).select("-password"); //identifying sender info
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("error in protectRoute middleware", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
export default protectRoute;