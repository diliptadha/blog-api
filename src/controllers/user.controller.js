import { v4 as uuidv4 } from "uuid";
import users from "../userData.js";
import { generateToken } from "../utils/jwt.js";

export const signup = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(req.body.email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const existingUser = users.find((user) => user.email === req.body.email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = {
    id: uuidv4(),
    email: req.body.email,
    password: req.body.password,
  };
  users.push(user);
  const token = generateToken(user);
  return res.status(201).json({
    success: true,
    token,
    user,
  });
};

export const login = (req, res) => {
  const user = users.find(
    (user) =>
      user.email === req.body.email && user.password === req.body.password
  );
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = generateToken(user);
  return res.status(200).json({
    success: true,
    token,
    user,
  });
};
