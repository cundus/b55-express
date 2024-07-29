import { PostModels } from "../models/PostModels";
import BaseService from "./BaseService";

class PostService extends BaseService {
   public posts: PostModels[] = [];

   public findAll() {
      return this.posts;
   }

   public findOne(id: number) {
      return this.posts[id];
   }

   public create(title: string, body: string) {
      const post = new PostModels(title, body);
      this.posts.push(post);
      return post;
   }

   public update(id: number, title: string, body: string) {
      const post = new PostModels(title, body);
      this.posts[id] = post;
      return post;
   }

   public delete(id: number) {
      this.posts.splice(id, 1);
   }
}

export default PostService;
