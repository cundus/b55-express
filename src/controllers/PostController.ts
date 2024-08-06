import { createPostSchema } from "../libs/validations/post";
import * as postService from "../services/PostService";
import { Request, Response } from "express";
import errorHandler from "../utils/errorHandler";

export const findAll = async (req: Request, res: Response) => {
   const posts = await postService.findAll();
   res.json(posts);
};

export const findById = async (req: Request, res: Response) => {
   const post = await postService.findById(parseInt(req.params.id));
   res.json(post);
};

export const create = async (req: Request, res: Response) => {
   try {
      await createPostSchema.validateAsync(req.body);

      console.log(req.files);
      if (req.files) {
         req.body.images = req.files;
      }

      const userId = res.locals.user.id;
      req.body.userId = userId;

      const post = await postService.create(req.body);
      res.json({
         message: "Post created successfully",
         data: post,
      });
   } catch (error) {
      console.log(error);

      errorHandler(res, error as unknown as Error);
   }
};

export const update = (req: Request, res: Response) => {
   const post = postService.update(parseInt(req.params.id), req.body);
   res.json(post);
};

export const remove = (req: Request, res: Response) => {
   const post = postService.remove(parseInt(req.params.id));
   res.json(post);
};
