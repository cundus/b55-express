import { Request, Response, NextFunction } from "express";

export abstract class BaseController {
   abstract findAll(req: Request, res: Response, next: NextFunction): void;
   abstract findOne(req: Request, res: Response, next: NextFunction): void;
   abstract create(req: Request, res: Response, next: NextFunction): void;
   abstract update(req: Request, res: Response, next: NextFunction): void;
   abstract delete(req: Request, res: Response, next: NextFunction): void;
}
