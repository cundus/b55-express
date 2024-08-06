import { PostModels } from "../models/PostModels";
import db from "../libs/db";
import { Posts } from "@prisma/client";
import { IPosts } from "../types/post";

const posts: PostModels[] = [];

export const findAll = async () => {
   return await db.posts.findMany({
      // join table
      include: {
         author: {
            select: {
               id: true,
               username: true,
               profile_pic: true,
            },
         },
         comments: true,
         images: true,
      },
   });
};

export const findById = async (id: number) => {
   return await db.posts.findFirst({
      where: { id },
      // join table
      include: {
         author: {
            select: {
               id: true,
               username: true,
               profile_pic: true,
            },
         },
         comments: true,
         images: true,
      },
   });
};

export const create = async (post: IPosts) => {
   const newPost = await db.posts.create({
      data: {
         ...post,
         images: {
            create:
               post.images &&
               post.images.map((image) => ({ image: image.filename })),
         },
      },
   });

   return newPost;
};

export const update = async (id: number, post: PostModels) => {
   const updatedPost = await db.posts.update({
      data: post,
      where: { id },
   });

   return updatedPost;
};

export const remove = async (id: number) => {
   await db.posts.delete({ where: { id } });

   return "deleted";
};
