import PostService from "../services/PostService";
import { BaseController } from "./BaseController";
import { Response, Request, NextFunction } from "express";

class PostController extends BaseController {
   private postServices: PostService;

   constructor(postService: PostService) {
      super();
      console.log("post controller", postService);

      this.postServices = postService;
   }

   public findAll(req: Request, res: Response) {
      console.log(this.postServices);

      res.send(this.postServices.findAll());
   }

   public findOne(req: Request, res: Response) {
      res.send(this.postServices.findOne(+req.params.id));
   }

   public create(req: Request, res: Response) {
      const body = req.body;

      const post = this.postServices.create(body.title, body.body);

      res.send(post);
   }

   public update(req: Request, res: Response) {
      const body = req.body;
      const id = +req.params.id;

      const post = this.postServices.update(id, body.title, body.body);

      res.send(post);
   }

   public delete(req: Request, res: Response) {
      const id = +req.params.id;

      this.postServices.delete(id);
      res.send({
         message: `Post with id ${id} has been deleted`,
      });
   }
}

export default PostController;
