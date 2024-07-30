import { Request, Response } from "express";
import * as authService from "../services/AuthService";
import { IUserRegister } from "../types/auth";

export const login = async (req: Request, res: Response) => {
   try {
      const { username, password } = req.body;
      const user = await authService.login(username, password);

      if (!user) {
         return res
            .status(401)
            .json({ message: "Invalid username or password" });
      }

      res.status(200).json(user);
   } catch (error) {
      res.status(500).json(error);
   }
};

export const register = async (req: Request, res: Response) => {
   try {
      const body = req.body;

      const user = await authService.register(body as IUserRegister);

      res.json(user);
   } catch (error) {
      res.status(500).json(error);
   }
};
