import { PostModels } from "../models/PostModels";
import BaseService from "./BaseService";

class PostService extends BaseService<PostModels> {
   public posts: PostModels[] = [];

   findAll(): PostModels[] {
      return this.posts;
   }

   findOne(id: number): PostModels | null {
      return this.posts[id];
   }

   create(title: string, body: string): PostModels {
      const post = new PostModels(title, body);
      this.posts.push(post);
      return post;
   }

   update(id: number, title: string, body: string): PostModels | null {
      const post = new PostModels(title, body);
      this.posts[id] = post;
      return post;
   }

   delete(id: number): void {
      this.posts.splice(id, 1);
   }
}

export default PostService;
