import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import connectDB from "./lib/connectDB.js";
const app = express();

app.use(express.json());
// app.use(cors());
app.use("/users", userRouter);
app.use("/comments", commentRouter);
app.use("/posts", postRouter);
app.listen(3000, () => {
  connectDB();
  console.log("server is running");
});
