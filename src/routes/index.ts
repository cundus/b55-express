import authRoute from "./AuthRoute";
import postRoute from "./PostRoute";
import { Router } from "express";
import repliesRoute from "./RepliesRoute";
const route = Router();

route.use("/posts", postRoute);
route.use("/auth", authRoute);
route.use("/reply", repliesRoute);

export default route;
