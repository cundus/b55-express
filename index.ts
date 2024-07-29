import express from "express";
import dotenv from "dotenv";
import PostRoute from "./src/routes/PostRoute";
// inisialisasi dotenv
dotenv.config();

// inisialisasi express
const app = express();
const port = process.env.PORT || 3000;

// routes

app.get("/", (req: express.Request, res: express.Response) => {
   res.send("Hello World, ini adalah aplikasi express boyuyyyyy!!!");
});

const post = new PostRoute();
app.use(post.router);

app.listen(port, () => {
   console.log("APLIKASINYA UDAH JALAN BANG");
});
