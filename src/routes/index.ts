import authRoute from "./AuthRoute";
import postRoute from "./PostRoute";
import { Router } from "express";
const route = Router();

route.use("/posts", postRoute);
route.use("/auth", authRoute);

export default route;
