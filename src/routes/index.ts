import postRoute from "./PostRoute";
import { Router } from "express";
const route = Router();

route.use("/posts", postRoute);

export default route;
