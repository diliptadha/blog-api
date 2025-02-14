import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_SECRET || "dilip",
    {
      expiresIn: "1d",
    }
  );
  return token;
};

export const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET || "dilip");
  return decoded;
};
