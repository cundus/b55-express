import { Request, Response } from "express";
import * as authService from "../services/AuthService";
import { IUserRegister } from "../types/auth";
import errorHandler from "../utils/errorHandler";

export const login = async (req: Request, res: Response) => {
   try {
      const { username, password } = req.body;
      const token = await authService.login(username, password);

      res.status(200).json({
         token: token,
      });
   } catch (error) {
      console.log(error);

      errorHandler(res, error as unknown as Error);
   }
};

export const register = async (req: Request, res: Response) => {
   try {
      const body = req.body;

      const user = await authService.register(body as IUserRegister);

      res.json({
         message: "User created successfully",
         data: user,
      });
   } catch (error) {
      console.log(error);

      errorHandler(res, error as unknown as Error);
   }
};

export const checkAuth = async (req: Request, res: Response) => {
   try {
      const user = res.locals.user;

      res.json({
         message: "User authenticated successfully",
         data: {
            fullName: user.fullName,
            username: user.username,
            profile_pic: user.profile_pic,
            email: user.email,
            id: user.id,
         },
      });
   } catch (error) {
      console.log(error);

      errorHandler(res, error as unknown as Error);
   }
};
