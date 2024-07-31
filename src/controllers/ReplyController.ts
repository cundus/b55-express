import { createPostSchema } from "../libs/validations/post";
import * as replyService from "../services/ReplyService";
import { Request, Response } from "express";
import errorHandler from "../utils/errorHandler";

export const findAll = async (req: Request, res: Response) => {
   const posts = await replyService.findAll();
   res.json(posts);
};

export const findById = async (req: Request, res: Response) => {
   const post = await replyService.findById(parseInt(req.params.id));
   res.json(post);
};

export const create = async (req: Request, res: Response) => {
   try {
      await createPostSchema.validateAsync(req.body);

      console.log(req.file);
      if (req.file) {
         req.body.image = req.file.filename;
      }

      const postId = parseInt(req.params.post_id);
      const userId = res.locals.user.id;
      req.body.userId = userId;
      req.body.parentId = postId;

      const post = await replyService.create(req.body);
      res.json({
         message: "Post created successfully",
         data: post,
      });
   } catch (error) {
      errorHandler(res, error as unknown as Error);
   }
};

export const update = (req: Request, res: Response) => {
   const post = replyService.update(parseInt(req.params.id), req.body);
   res.json(post);
};

export const remove = (req: Request, res: Response) => {
   const post = replyService.remove(parseInt(req.params.id));
   res.json(post);
};
