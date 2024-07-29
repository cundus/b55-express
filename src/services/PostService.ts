import { PostModels } from "../models/PostModels";

const posts: PostModels[] = [];

export const findAll = () => {
   return posts;
};

export const findById = (id: number) => {
   return posts[id];
};

export const create = (post: PostModels) => {
   posts.push(post);

   return post;
};

export const update = (index: number, post: PostModels) => {
   posts[index] = post;

   return post;
};

export const remove = (index: number) => {
   posts.splice(index, 1);

   return "deleted";
};
