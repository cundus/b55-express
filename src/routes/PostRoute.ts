import { Router } from "express";
import * as postController from "../controllers/PostController";
const postRoute = Router();

postRoute.get("/", postController.findAll);

postRoute.get("/:id", postController.findById);

postRoute.post("/", postController.create);

postRoute.put("/:id", postController.update);

postRoute.delete("/:id", postController.remove);

export default postRoute;
