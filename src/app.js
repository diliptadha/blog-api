import express, { json } from "express";
import blogRouter from "./routes/blog.route.js";
import userRouter from "./routes/user.route.js";

export const app = express();
app.use(json());

app.get("/", (_req, res) => {
  res.json({
    message: "Welcome to application.",
    success: true,
  });
});

app.use("/blog", blogRouter);
app.use("/user", userRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: "Something went wrong!", error: err.message });
});

app.use((req, res, next) => {
  res.status(404).json({
    message: "404 not found path",
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
