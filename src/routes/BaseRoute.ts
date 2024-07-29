import express from "express";

class BaseRoute {
   protected router: express.Router;

   constructor() {
      this.router = express.Router();
   }
}

export default BaseRoute;
