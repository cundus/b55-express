import { User } from "@prisma/client";
import db from "../libs/db";
import { IUserRegister } from "../types/auth";

export const login = async (username: string, password: string) => {
   try {
      const existedUser = await db.user.findFirst({
         where: {
            username: username,
         },
      });

      if (!existedUser) {
         return null;
      }

      return existedUser;
   } catch (error) {
      throw error;
   }
};

export const register = async (user: IUserRegister): Promise<User | string> => {
   try {
      const existedUser = await db.user.findFirst({
         where: {
            username: user.username,
         },
      });

      if (existedUser) {
         throw new Error("Username already exist");
      }

      const newUser = await db.user.create({
         data: user,
      });

      return newUser;
   } catch (error) {
      throw error;
   }
};
