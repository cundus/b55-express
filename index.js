const express = require("express");
const dotenv = require("dotenv");

// inisialisasi dotenv
dotenv.config();

// inisialisasi express
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
   res.send("Hello World, ini adalah aplikasi express");
});

app.listen(port, () => {
   console.log("APLIKASINYA UDAH JALAN BANG");
});
