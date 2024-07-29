import BaseRoute from "./BaseRoute";
import express from "express";
// controllers
import PostController from "../controllers/PostController";

// services
import PostService from "../services/PostService";

class PostRoute extends BaseRoute {
   protected postController: PostController;

   constructor() {
      super();
      const postService = new PostService();
      this.postController = new PostController(postService);
   }

   protected initializeRoutes() {
      console.log("post route", this.postController);

      // this.router.get("/posts", this.postController.findAll);
      // this.router.get("/posts/:id", this.postController.findOne);
      // this.router.post("/posts", this.postController.create);
      // this.router.put("/posts/:id", this.postController.update);
      // this.router.delete("/posts/:id", this.postController.delete);
   }
}

export default PostRoute;
