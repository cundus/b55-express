import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export default async (req: Request, res: Response, next: NextFunction) => {
   // extract token from authorization header

   const token = req.headers.authorization?.split(" ")[1];

   if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
   }

   const payload = jwt.verify(token, process.env.SECRET_KEY || "secret");

   if (!payload) {
      return res.status(401).json({ message: "Unauthorized" });
   }

   res.locals.user = payload;

   next();
};
