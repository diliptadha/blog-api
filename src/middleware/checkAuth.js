import { verifyToken } from "../utils/jwt.js";
import users from "../userData.js";

export const checkUserlogin = (req, res, next) => {
  if (!req.headers.token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const decoded = verifyToken(req.headers.token);
  if (!decoded) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const user = users.find((user) => user.id === decoded.id);
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.user = decoded;

  next();
};
