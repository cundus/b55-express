import express, { Router } from "express";

abstract class BaseRoute {
   public router: Router = Router();

   constructor() {
      this.initializeRoutes();
   }

   protected abstract initializeRoutes(): void;
}

export default BaseRoute;
