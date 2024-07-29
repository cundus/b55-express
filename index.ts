import express from "express";
import dotenv from "dotenv";
import PostRoute from "./src/routes/PostRoute";
// inisialisasi dotenv
dotenv.config();

// inisialisasi express
const app = express();
const port = process.env.PORT || 3000;

// routes
app.use("/posts", PostRoute);

app.get("/", (req: express.Request, res: express.Response) => {
   res.send("Hello World, ini adalah aplikasi express boyuyyyyy!!!");
});

app.listen(port, () => {
   console.log("APLIKASINYA UDAH JALAN BANG");
});
