import express from "express";
import dotenv from "dotenv";
import route from "./src/routes";
import db from "./src/libs/db";
import cors from "cors";

// inisialisasi dotenv
dotenv.config();

// inisialisasi express
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("src/uploads"));
app.use(cors());

// routes

app.get("/", (req: express.Request, res: express.Response) => {
   res.send("Hello World, ini adalah aplikasi express boyuyyyyy!!!");
});

app.use(route);

app.listen(port, async () => {
   try {
      await db.$connect();
      console.log("Express running on port " + port);
   } catch (error) {
      await db.$disconnect();
   }
});
