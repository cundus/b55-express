import { Router } from "express";
import * as authController from "../controllers/AuthController";
const authRoute = Router();

authRoute.post("/login", authController.login);

authRoute.post("/register", authController.register);

export default authRoute;
