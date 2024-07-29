import * as postService from "../services/PostService";
import { Request, Response } from "express";

export const findAll = (req: Request, res: Response) => {
   const posts = postService.findAll();
   res.json(posts);
};

export const findById = (req: Request, res: Response) => {
   const post = postService.findById(parseInt(req.params.id));
   res.json(post);
};

export const create = (req: Request, res: Response) => {
   const post = postService.create(req.body);
   res.json(post);
};

export const update = (req: Request, res: Response) => {
   const post = postService.update(parseInt(req.params.id), req.body);
   res.json(post);
};

export const remove = (req: Request, res: Response) => {
   const post = postService.remove(parseInt(req.params.id));
   res.json(post);
};
