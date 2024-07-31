import { Router } from "express";
import * as postController from "../controllers/PostController";
import authorization from "../middlewares/authorization";
import upload from "../middlewares/fileUpload";
const postRoute = Router();

postRoute.get("/", postController.findAll);

postRoute.get("/:id", postController.findById);

postRoute.post(
   "/",
   authorization,
   upload.single("image"),
   postController.create
);

postRoute.put("/:id", postController.update);

postRoute.delete("/:id", postController.remove);

export default postRoute;
