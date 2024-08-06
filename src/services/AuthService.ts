import { User } from "@prisma/client";
import db from "../libs/db";
import { IUserRegister } from "../types/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ERROR from "../utils/constants/ERROR_LIST";

export const login = async (username: string, password: string) => {
   const existedUser = await db.user.findFirst({
      where: {
         OR: [{ username: username }, { email: username }],
      },
   });

   if (!existedUser) {
      throw new Error(ERROR.AUTH_NOT_FOUND);
   }

   const isMatch = await bcrypt.compare(password, existedUser.password);

   if (!isMatch) {
      throw new Error(ERROR.AUTH_NOT_FOUND);
   }

   const token = jwt.sign(existedUser, process.env.SECRET_KEY! || "secret", {
      expiresIn: "1d",
   });

   return token;
};

export const register = async (user: IUserRegister): Promise<User | string> => {
   const existedUser = await db.user.findFirst({
      where: {
         username: user.username,
      },
   });

   if (existedUser) {
      throw new Error("Username already exist");
   }

   //   hash password agar aman
   const hashedPassword = await bcrypt.hash(user.password, 10);

   user.password = hashedPassword;

   const newUser = await db.user.create({
      data: user,
   });

   return newUser;
};
