import PostController from "../controllers/PostController";
import BaseRoute from "./BaseRoute";
import express from "express";

class PostRoute extends BaseRoute {
   protected postController: PostController;

   constructor() {
      super();
      this.postController = new PostController();
   }

   public routes() {
      this.router.route("/posts").get(this.postController.findAll);
      this.router.route("/posts/:id").get(this.postController.findOne);
      this.router.route("/posts").post(this.postController.create);
      this.router.route("/posts/:id").put(this.postController.update);
      this.router.route("/posts/:id").delete(this.postController.delete);

      return this.router;
   }
}

export default new PostRoute().routes();
